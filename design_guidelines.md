# Design Guidelines: Walkers Fencing Contractors

## Design Approach
**Reference-Based**: Drawing inspiration from service-oriented businesses like Houzz and professional contractor portfolios that effectively showcase craftsmanship while maintaining approachability and trust.

**Design Principles**:
- Professional craftsmanship with natural warmth
- Visual storytelling through project gallery
- Clear service communication
- Trust-building through authentic presentation

## Typography System

**Primary Font**: Outfit or Inter (Google Fonts) - Clean, professional sans-serif
**Accent Font**: Crimson Text or Lora - For elegant headlines

**Hierarchy**:
- Hero Headline: text-5xl to text-7xl, font-bold
- Section Headings: text-4xl, font-semibold
- Subsection Titles: text-2xl, font-medium
- Body Text: text-lg, leading-relaxed
- Captions: text-sm

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-6 for lists
- Container max-width: max-w-7xl with px-6

## Component Structure

### Hero Section (Full viewport ~90vh)
- Large background image of completed fencing project (blurred slightly)
- Company name and tagline overlaid
- Primary CTA button with blurred background
- Trust indicator: "25+ Years Experience" or similar badge

### About Section
- Two-column layout (lg:grid-cols-2)
- Left: Company story, values, expertise (max-w-prose)
- Right: Owner/team photo or action shot
- Include key differentiators (licensed, insured, local)

### Services Section
- Three-column grid (grid-cols-1 md:grid-cols-3)
- Each service card includes icon, title, brief description, subtle examples
- Services: Residential Fencing, Commercial Projects, Repairs & Maintenance, Custom Gates, etc.

### Gallery Section
- Masonry-style grid or 3-column responsive grid
- 9-12 project images minimum
- Hover overlay with project type label
- Modal lightbox for full-size viewing

### Contact Section
- Two-column split
- Left: Contact form (Name, Email, Phone, Message, Project Type)
- Right: Direct contact info (phone prominent, email, hours), service area map placeholder
- Include "Free Quote" emphasis

### Footer
- Company info, quick links, social media, licensing info
- Copyright and trust badges

## Images

**Hero Image**: Large, high-quality photo of a beautifully completed fence project - ideally wooden fence with garden/landscape visible, sunny day. Should convey craftsmanship and outdoor beauty.

**About Section Image**: Professional photo of owner/team at work site or completed project

**Gallery Images**: 9-12 diverse project photos showing:
- Various fence styles (wood, vinyl, chain-link, decorative)
- Different applications (residential backyards, commercial, gates)
- Before/after pairs if available
- Detail shots of craftsmanship

**Service Cards**: Small icon illustrations (from icon library) representing each service type

## Design Notes

- All buttons on images use backdrop-blur for readability
- Gallery uses subtle zoom-on-hover for engagement
- Contact CTA repeated in multiple sections
- Mobile-first responsive grid adjustments
- Authentic, professional photography over stock images
- Form includes privacy reassurance text