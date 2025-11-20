interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export function ResponsiveImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
}: ResponsiveImageProps) {
  // Convert desktop src to mobile src (replace .webp with -mobile.webp)
  const mobileSrc = src.replace(".webp", "-mobile.webp");

  return (
    <picture>
      {/* Mobile: 800px width images */}
      <source
        media="(max-width: 768px)"
        srcSet={mobileSrc}
        type="image/webp"
      />
      {/* Desktop: full-size images */}
      <source
        media="(min-width: 769px)"
        srcSet={src}
        type="image/webp"
      />
      {/* Fallback */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
