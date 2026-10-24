import v1 from "@/assets/venue-1.jpg";
import v2 from "@/assets/venue-2.jpg";
import v3 from "@/assets/venue-3.jpg";
import v4 from "@/assets/venue-4.jpg";
import ocWedding from "@/assets/occasion-wedding.jpg";
import ocMehndi from "@/assets/occasion-mehndi.jpg";
import ocBarat from "@/assets/occasion-barat.jpg";
import ocWalima from "@/assets/occasion-walima.jpg";
import ocEngagement from "@/assets/occasion-engagement.jpg";
import ocBirthday from "@/assets/occasion-birthday.jpg";

export type Venue = { name: string; city: string; area: string; capacity: string; price: string; image: string; type: string };

export const venues: Venue[] = [
  { name: "The Noor Mahal", city: "Lahore", area: "Gulberg", capacity: "200 – 1,200 guests", price: "PKR 850,000", image: v1, type: "Banquet Hall" },
  { name: "Zaitoon Gardens", city: "Islamabad", area: "Bani Gala", capacity: "100 – 500 guests", price: "PKR 450,000", image: v2, type: "Open-air Lawn" },
  { name: "Haveli Rosewood", city: "Islamabad", area: "F-7", capacity: "80 – 350 guests", price: "PKR 600,000", image: v3, type: "Heritage Estate" },
  { name: "Sahil Pavilion", city: "Karachi", area: "DHA Phase 8", capacity: "300 – 1,500 guests", price: "PKR 1,100,000", image: v4, type: "Marquee" },
];

export const occasions = ["Wedding", "Mehndi", "Barat", "Walima", "Engagement", "Birthday"];

export const occasionImages: Record<string, string> = {
  Wedding: ocWedding,
  Mehndi: ocMehndi,
  Barat: ocBarat,
  Walima: ocWalima,
  Engagement: ocEngagement,
  Birthday: ocBirthday,
};
export const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan"];
