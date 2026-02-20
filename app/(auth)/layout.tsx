"use client";

import Logo from "@/components/common/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBg px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

        {/* Logo */}
        <div className="mb-8">
          <Logo centered />
        </div>

        {children}
      </div>
    </div>
  );
}