"use client";

import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-svh flex items-center justify-center">
      <div className="w-full max-w-md p-6  rounded-lg shadow-lg">
        {children}
      </div>
    </main>
  );
}
