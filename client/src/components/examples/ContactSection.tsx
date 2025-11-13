import ContactSection from "../ContactSection";

export default function ContactSectionExample() {
  const contactInfo = {
    phone: "07805 972495",
    email: "info@walkersfencing.com",
    hours:
      "Monday - Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 4:00 PM\nSunday: Closed",
    location:
      "Serving the Greater Metropolitan Area and Surrounding Communities",
  };

  return <ContactSection contactInfo={contactInfo} />;
}
