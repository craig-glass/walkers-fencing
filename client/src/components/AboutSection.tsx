import { Card } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { ResponsiveImage } from "@/components/ResponsiveImage";

interface AboutSectionProps {
  image: string;
  imageMobile?: string;
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutSection({ image, imageMobile, title, description, highlights }: AboutSectionProps) {
  const features = [
    { icon: Shield, label: "Licensed & Insured" },
    { icon: Award, label: "Quality Craftsmanship" },
    { icon: Users, label: "Expert Team" },
  ];

  return (
    <section id="about" className="py-20 bg-background" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 id="about-heading" className="text-4xl font-bold mb-6 font-serif text-foreground">
              {title}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-foreground/80 max-w-prose">
              {description}
            </p>

            <ul className="space-y-3 mb-8" aria-label="Company highlights">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-foreground/70">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4" role="list" aria-label="Key features">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 text-center hover-elevate" role="listitem">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium text-card-foreground">{feature.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ResponsiveImage
              src={image}
              mobileSrc={imageMobile}
              alt="Professional fencing contractors working on site, demonstrating expert craftsmanship and attention to detail"
              className="rounded-md w-full h-auto object-cover shadow-lg"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
