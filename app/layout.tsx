import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightBg min-h-screen">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedula",
  description: "Doctor Appointment Booking Application",
  icons: {
    icon: "/main.png",
  },
};