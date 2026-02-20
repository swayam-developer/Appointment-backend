import { getAllDoctors } from "@/services/api";
import DoctorCard from "@/components/common/DoctorCard";
import { Doctor } from "@/types";

export default async function DoctorsPage() {
  const doctors: Doctor[] | null = await getAllDoctors();

  if (!doctors) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-semibold">
          Failed to load doctors
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
