import ServicesSection from '../ServicesSection';
import { Home, Building2, Wrench, DoorOpen, Trees, Shield } from "lucide-react";

export default function ServicesSectionExample() {
  const services = [
    {
      icon: Home,
      title: "Residential Fencing",
      description: "Beautiful and durable fencing solutions for your home, enhancing privacy and curb appeal.",
      examples: ["Privacy fences", "Picket fences", "Decorative fencing", "Pool fencing"]
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Professional-grade fencing for businesses, schools, and commercial properties.",
      examples: ["Security fencing", "Chain-link installation", "Industrial fencing", "Perimeter protection"]
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description: "Expert repair services to restore and maintain your existing fencing.",
      examples: ["Fence repairs", "Post replacement", "Gate repairs", "Weather damage restoration"]
    },
    {
      icon: DoorOpen,
      title: "Custom Gates",
      description: "Handcrafted gates designed to match your fencing and enhance accessibility.",
      examples: ["Driveway gates", "Garden gates", "Security gates", "Automated gate systems"]
    },
    {
      icon: Trees,
      title: "Wood Fencing",
      description: "Natural beauty and strength with premium wood fencing options.",
      examples: ["Cedar fencing", "Pine fencing", "Redwood options", "Custom staining"]
    },
    {
      icon: Shield,
      title: "Vinyl & Composite",
      description: "Low-maintenance, long-lasting alternatives to traditional wood fencing.",
      examples: ["Vinyl privacy fences", "Composite materials", "Color options", "Minimal upkeep"]
    }
  ];

  return <ServicesSection services={services} />;
}
