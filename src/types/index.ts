export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialization: string;
  image: string;
  experience: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export interface IMCResult {
  bmi: number;
  category: string;
  color: string;
  recommendation: string;
}