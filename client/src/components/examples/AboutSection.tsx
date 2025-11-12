import AboutSection from '../AboutSection';
import teamImage from '@assets/generated_images/Professional_fencing_contractors_at_work_bc4e7317.png';

export default function AboutSectionExample() {
  return (
    <AboutSection
      image={teamImage}
      title="About Walkers Fencing Contractors"
      description="With over 25 years of experience in the fencing industry, Walkers Fencing Contractors has built a reputation for exceptional craftsmanship and reliable service. We're a family-owned business dedicated to transforming properties with high-quality fencing solutions that combine durability, security, and aesthetic appeal."
      highlights={[
        "Serving the local community for over two decades",
        "Fully licensed, bonded, and insured for your peace of mind",
        "Expert installation and repair services",
        "Custom solutions tailored to your property's unique needs",
        "Free consultations and competitive pricing"
      ]}
    />
  );
}
