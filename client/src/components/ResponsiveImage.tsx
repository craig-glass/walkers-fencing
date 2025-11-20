interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
}

export function ResponsiveImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  width = 1024,
  height = 768,
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
        width={Math.min(width, 800)}
        height={height}
      />
      {/* Desktop: full-size images */}
      <source
        media="(min-width: 769px)"
        srcSet={src}
        type="image/webp"
        width={width}
        height={height}
      />
      {/* Fallback */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
      />
    </picture>
  );
}
