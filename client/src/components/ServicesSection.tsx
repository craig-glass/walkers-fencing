import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Home, Building2, Wrench, DoorOpen, Trees, Shield } from "lucide-react";

interface Service {
  icon: typeof Home;
  title: string;
  description: string;
  examples: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-muted/30" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl font-bold mb-4 font-serif text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fencing solutions for every need, from residential privacy to commercial security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`} role="listitem">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                <div className="p-3 rounded-md bg-primary/10" aria-hidden="true">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2" aria-label={`${service.title} examples`}>
                  {service.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1" aria-hidden="true">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
