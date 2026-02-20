"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/login");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Sign Up</h2>

      <Input placeholder="Full Name" />
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <Button className="w-full bg-primary" onClick={handleSignup}>
        Create Account
      </Button>
    </div>
  );
}
