"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { verifyAuth, logout as authLogout } from "@/lib/auth";
import { useAppStore } from "@/lib/store";
import MakeSelector from "@/components/MakeSelector";
import ModelSelector from "@/components/ModelSelector";
import GradeSelector from "@/components/GradeSelector";
import SpecSheet from "@/components/SpecSheet";
import CustomerPreference from "@/components/CustomerPreference";

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, setAuthenticated, reset } = useAppStore();

  useEffect(() => {
    const checkAuth = async () => {
      const { authenticated } = await verifyAuth();
      if (!authenticated) {
        router.push("/login");
      } else {
        setAuthenticated(true);
      }
    };
    checkAuth();
  }, [router, setAuthenticated]);

  const handleLogout = async () => {
    await authLogout();
    reset();
    router.push("/login");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <Image
                  src="/Indralogo.png"
                  alt="Indra Traders Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Vehicle Spec Sheet System</h1>
                <p className="text-xs text-gray-500">Powered by Indra Traders (PVT) LTD.</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <CustomerPreference />
          <MakeSelector />
          <ModelSelector />
          <GradeSelector />
          <div id="spec-sheet">
            <SpecSheet />
          </div>
        </div>
      </main>
    </div>
  );
}

