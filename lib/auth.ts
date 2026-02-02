// Authentication utilities (client-side)

export interface User {
  id: string;
  username: string;
  email: string;
}

export async function login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function verifyAuth(): Promise<{ authenticated: boolean; user?: User }> {
  try {
    const response = await fetch("/api/verify");
    const data = await response.json();
    return data;
  } catch {
    return { authenticated: false };
  }
}

export async function logout(): Promise<void> {
  try {
    await fetch("/api/logout", { method: "POST" });
  } catch (error) {
    console.error("Logout error:", error);
  }
}

