import HeroSection from '../HeroSection';
import heroImage from '@assets/generated_images/Hero_wooden_fence_with_garden_7b5732e3.png';

export default function HeroSectionExample() {
  return (
    <HeroSection
      backgroundImage={heroImage}
      companyName="Walkers Fencing Contractors"
      tagline="Expert Fencing Solutions for Residential & Commercial Properties"
      yearsExperience={25}
    />
  );
}
