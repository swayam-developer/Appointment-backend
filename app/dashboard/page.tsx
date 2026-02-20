import Image from "next/image";
import { Stethoscope, CalendarCheck, Users } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <Image
          src={`/Dashboard-bg/bg1.jpg`}
          alt="Healthcare Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl font-semibold">Welcome to Schedula</h1>
          <p className="mt-2 text-sm max-w-xl">
            Your trusted platform to connect with experienced doctors and book
            appointments seamlessly.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="p-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 -mt-16 relative z-10">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Stethoscope className="text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Expert Doctors</h3>
          <p className="text-sm text-gray-600">
            Connect with certified specialists across multiple medical fields.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <CalendarCheck className="text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Easy Booking</h3>
          <p className="text-sm text-gray-600">
            Schedule appointments in just a few clicks with real-time
            availability.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Users className="text-primary mb-3" size={28} />
          <h3 className="font-semibold mb-2">Trusted Care</h3>
          <p className="text-sm text-gray-600">
            Providing secure and reliable healthcare services with top-rated
            professionals.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Schedula</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Schedula is a modern healthcare appointment booking platform designed
          to simplify patient-doctor interactions. Our mission is to bridge the
          gap between patients and trusted medical professionals through
          seamless technology.
        </p>
      </div>
    </div>
  );
}
