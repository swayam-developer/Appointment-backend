export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  qualification: string;
  hospital: string;
  location: string;
  rating: number;
  consultationFee: number;
  languages: string[];
  availability: string;
  description: string;
  slots: string[];
}
