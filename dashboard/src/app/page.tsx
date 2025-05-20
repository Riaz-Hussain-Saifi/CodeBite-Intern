// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Home Page Component
 * 
 * This component serves as the landing page of the application.
 * It automatically redirects users to the dashboard page.
 */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard on component mount
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-2">codebite</h1>
        <p className="text-gray-600">Redirecting to dashboard...</p>
        <div className="mt-4 w-16 h-1 bg-blue-200 mx-auto rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}