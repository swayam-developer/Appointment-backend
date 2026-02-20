"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      setUsername(parsed.name); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="font-semibold text-lg text-primary">
       Welcome To Schedula 
      </h1>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={`/UserProfile/Avatar.png`}
            alt="User Avatar"
            width={50}
            height={50}
            className="rounded-full border border-gray-300"
          />

          <div className="text-sm">
            <p className="font-medium">Hi, {username}</p>
            <button
              onClick={handleLogout}
              className="text-red-500 text-xs hover:underline"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
