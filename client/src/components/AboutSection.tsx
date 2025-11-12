import { Card } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

interface AboutSectionProps {
  image: string;
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutSection({ image, title, description, highlights }: AboutSectionProps) {
  const features = [
    { icon: Shield, label: "Licensed & Insured" },
    { icon: Award, label: "Quality Craftsmanship" },
    { icon: Users, label: "Expert Team" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 font-serif text-foreground">
              {title}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-foreground/80 max-w-prose">
              {description}
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/70">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 text-center hover-elevate">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium text-card-foreground">{feature.label}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={image} 
              alt="Our team at work" 
              className="rounded-md w-full h-auto object-cover shadow-lg"
              data-testid="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
