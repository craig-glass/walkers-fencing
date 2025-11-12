import GallerySection from '../GallerySection';
import privacyFence from '@assets/generated_images/Privacy_fence_craftsmanship_detail_1c0e1448.png';
import customGate from '@assets/generated_images/Custom_decorative_gate_installation_1aa9c393.png';
import backyard from '@assets/generated_images/Complete_backyard_fencing_project_da604fdb.png';
import commercial from '@assets/generated_images/Commercial_fence_installation_project_0c6d20e7.png';
import repair from '@assets/generated_images/Fence_repair_and_restoration_319b8cc3.png';
import picket from '@assets/generated_images/Classic_picket_fence_garden_471b1364.png';
import modern from '@assets/generated_images/Modern_horizontal_slat_fence_2d839dc9.png';
import chainlink from '@assets/generated_images/Chain-link_security_fence_f86f494c.png';

export default function GallerySectionExample() {
  const images = [
    { src: privacyFence, alt: "Privacy fence with expert craftsmanship", category: "Residential" },
    { src: customGate, alt: "Custom decorative gate installation", category: "Custom Gates" },
    { src: backyard, alt: "Complete backyard fencing project", category: "Residential" },
    { src: commercial, alt: "Commercial fence installation", category: "Commercial" },
    { src: repair, alt: "Professional fence repair and restoration", category: "Repairs" },
    { src: picket, alt: "Classic picket fence with garden", category: "Residential" },
    { src: modern, alt: "Modern horizontal slat fence", category: "Contemporary" },
    { src: chainlink, alt: "Chain-link security fence", category: "Commercial" },
  ];

  return <GallerySection images={images} />;
}
