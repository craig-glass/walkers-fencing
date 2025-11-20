import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

interface ContactInfo {
  phone: string;
  email: string;
  hours: string;
  location: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-muted/30" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl font-bold mb-4 font-serif text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your property? Contact us for a free consultation
            and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold text-card-foreground">
                Send Us a Message
              </h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form and we'll respond within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/mjkjjokj"
                // action="https://formspree.io/f/xldaawkb"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  data-testid="button-submit-contact"
                >
                  Request Free Quote
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will never share your information
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="hover-elevate">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-md bg-primary/10" aria-hidden="true">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-card-foreground">
                    Phone
                  </h4>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-phone-contact"
                    aria-label={`Call us at ${contactInfo.phone}`}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-md bg-primary/10" aria-hidden="true">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-card-foreground">
                    Email
                  </h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email-contact"
                    aria-label={`Email us at ${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-md bg-primary/10" aria-hidden="true">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-card-foreground">
                    Business Hours
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-hours">
                    {contactInfo.hours}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-md bg-primary/10" aria-hidden="true">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-card-foreground">
                    Service Area
                  </h4>
                  <p
                    className="text-muted-foreground"
                    data-testid="text-location"
                  >
                    {contactInfo.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
