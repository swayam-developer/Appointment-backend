"use client";

import { Stethoscope } from "lucide-react";

interface LogoProps {
  size?: number;
  showText?: boolean;
  centered?: boolean;
}

export default function Logo({
  size = 20,
  showText = true,
  centered = false,
}: LogoProps) {
  return (
    <div
      className={`flex items-center gap-2 ${
        centered ? "justify-center" : ""
      }`}
    >
      <div className="bg-primary text-white p-2 rounded-lg">
        <Stethoscope size={size} />
      </div>

      {showText && (
        <h2 className="text-xl font-semibold text-primary">
          Schedula
        </h2>
      )}
    </div>
  );
}