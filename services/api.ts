export async function getAllDoctors() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    return await res.json();
  } catch (error) {
    console.error("getAllDoctors error:", error);
    return [];
  }
}

export async function getDoctorById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("getDoctorById error:", error);
    return null;
  }
}
