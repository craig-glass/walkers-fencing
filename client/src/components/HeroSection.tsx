import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
  companyName: string;
  tagline: string;
  yearsExperience: number;
}

export default function HeroSection({
  backgroundImage,
  companyName,
  tagline,
  yearsExperience,
}: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section with company introduction"
    >
      <img
        src={backgroundImage}
        alt="Professional fencing installation showcase featuring high-quality wooden fence with landscaped garden"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 mb-6">
          <span className="text-sm font-medium">
            {yearsExperience}+ Years of Excellence
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
          {companyName}
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          {tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground border border-primary-border"
            onClick={() => scrollToSection("contact")}
            data-testid="button-get-quote"
            aria-label="Navigate to contact form for free quote"
          >
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection("services")}
            data-testid="button-view-services"
            aria-label="Navigate to services section"
          >
            View Services
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80">
          <a
            href="tel:07805972495"
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors"
            data-testid="link-phone-hero"
            aria-label="Call us at 07805 972495"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">07805 972495</span>
          </a>
          <span className="text-white/40" aria-hidden="true">|</span>
          <a
            href="mailto:walkersfencingcontractors@mail.com"
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors"
            data-testid="link-email-hero"
            aria-label="Email us at walkersfencingcontractors@mail.com"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">
              walkersfencingcontractors@mail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
