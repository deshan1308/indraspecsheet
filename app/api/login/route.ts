import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

// Mock user database
const USERS = [
  {
    id: "1",
    username: "admin",
    password: "admin123",
    email: "admin@example.com",
  },
  {
    id: "2",
    username: "user",
    password: "user123",
    email: "user@example.com",
  },
  {
    id: "3",
    username: "tier-2",
    password: "indra@tier2",
    email: "tier2@example.com",
  },
  {
    id: "4",
    username: "digital-marketing",
    password: "indra@dmkt",
    email: "digitalmarketing@example.com",
  },
  {
    id: "5",
    username: "tier-1",
    password: "indra@tier1",
    email: "tier1@example.com",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const user = USERS.find((u) => u.username === username && u.password === password);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ success: true, token });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

