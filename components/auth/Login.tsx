"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "John Doe", email: "john@example.com" }),
    );
    router.push("/otp");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Login</h2>

      <div>
        <label className="text-sm">Email</label>
        <Input placeholder="Enter your email" />
      </div>

      <div>
        <label className="text-sm">Password</label>
        <Input type="password" placeholder="Enter password" />
      </div>

      <Button className="w-full bg-primary" onClick={handleLogin}>
        Login
      </Button>

      <p className="text-sm text-center">
        Don’t have an account?{" "}
        <a href="/signup" className="text-primary">
          Sign Up
        </a>
      </p>
    </div>
  );
}
