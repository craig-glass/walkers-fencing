import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Home, Building2, Wrench, DoorOpen, Trees, Shield } from "lucide-react";

import heroImage from "@assets/generated_images/Hero_wooden_fence_with_garden_7b5732e3.png";
import teamImage from "@assets/generated_images/Professional_fencing_contractors_at_work_bc4e7317.png";
import privacyFence from "@assets/generated_images/Privacy_fence_craftsmanship_detail_1c0e1448.png";
import customGate from "@assets/generated_images/Custom_decorative_gate_installation_1aa9c393.png";
import backyard from "@assets/generated_images/Complete_backyard_fencing_project_da604fdb.png";
import commercial from "@assets/generated_images/Commercial_fence_installation_project_0c6d20e7.png";
import repair from "@assets/generated_images/Fence_repair_and_restoration_319b8cc3.png";
import picket from "@assets/generated_images/Classic_picket_fence_garden_471b1364.png";
import modern from "@assets/generated_images/Modern_horizontal_slat_fence_2d839dc9.png";
import chainlink from "@assets/generated_images/Chain-link_security_fence_f86f494c.png";

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Residential Fencing",
      description:
        "Beautiful and durable fencing solutions for your home, enhancing privacy and curb appeal.",
      examples: [
        "Privacy fences",
        "Picket fences",
        "Decorative fencing",
        "Pool fencing",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description:
        "Professional-grade fencing for businesses, schools, and commercial properties.",
      examples: [
        "Security fencing",
        "Chain-link installation",
        "Industrial fencing",
        "Perimeter protection",
      ],
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description:
        "Expert repair services to restore and maintain your existing fencing.",
      examples: [
        "Fence repairs",
        "Post replacement",
        "Gate repairs",
        "Weather damage restoration",
      ],
    },
    {
      icon: DoorOpen,
      title: "Custom Gates",
      description:
        "Handcrafted gates designed to match your fencing and enhance accessibility.",
      examples: [
        "Driveway gates",
        "Garden gates",
        "Security gates",
        "Automated gate systems",
      ],
    },
    {
      icon: Trees,
      title: "Wood Fencing",
      description:
        "Natural beauty and strength with premium wood fencing options.",
      examples: [
        "Cedar fencing",
        "Pine fencing",
        "Redwood options",
        "Custom staining",
      ],
    },
    {
      icon: Shield,
      title: "Vinyl & Composite",
      description:
        "Low-maintenance, long-lasting alternatives to traditional wood fencing.",
      examples: [
        "Vinyl privacy fences",
        "Composite materials",
        "Color options",
        "Minimal upkeep",
      ],
    },
  ];

  const galleryImages = [
    {
      src: privacyFence,
      alt: "Privacy fence with expert craftsmanship",
      category: "Residential",
    },
    {
      src: customGate,
      alt: "Custom decorative gate installation",
      category: "Custom Gates",
    },
    {
      src: backyard,
      alt: "Complete backyard fencing project",
      category: "Residential",
    },
    {
      src: commercial,
      alt: "Commercial fence installation",
      category: "Commercial",
    },
    {
      src: repair,
      alt: "Professional fence repair and restoration",
      category: "Repairs",
    },
    {
      src: picket,
      alt: "Classic picket fence with garden",
      category: "Residential",
    },
    {
      src: modern,
      alt: "Modern horizontal slat fence",
      category: "Contemporary",
    },
    {
      src: chainlink,
      alt: "Chain-link security fence",
      category: "Commercial",
    },
  ];

  const contactInfo = {
    phone: "07805 972495",
    email: "info@walkersfencing.com",
    hours:
      "Monday - Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 4:00 PM\nSunday: Closed",
    location: "Serving the North East and Surrounding Communities",
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        backgroundImage={heroImage}
        companyName="Walkers Fencing Contractors"
        tagline="Expert Fencing Solutions for Residential & Commercial Properties"
        yearsExperience={25}
      />

      <AboutSection
        image={teamImage}
        title="About Walkers Fencing Contractors"
        description="With over 25 years of experience in the fencing industry, Walkers Fencing Contractors has built a reputation for exceptional craftsmanship and reliable service. We're a family-owned business dedicated to transforming properties with high-quality fencing solutions that combine durability, security, and aesthetic appeal."
        highlights={[
          "Serving the local community for over two decades",
          "Fully licensed, bonded, and insured for your peace of mind",
          "Expert installation and repair services",
          "Custom solutions tailored to your property's unique needs",
          "Free consultations and competitive pricing",
        ]}
      />

      <ServicesSection services={services} />

      <GallerySection images={galleryImages} />

      <ContactSection contactInfo={contactInfo} />

      <Footer
        companyName="Walkers Fencing Contractors"
        licenseNumber="FC-12345"
      />
    </div>
  );
}
