// Browser shim for next/image: renders a plain <img> with the same layout
// semantics (fill -> absolutely positioned cover) and no Next image optimizer.
import * as React from "react";

type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string | { src: string };
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
};

// Neutral brand-tinted placeholder for image paths that only exist inside the
// Next.js app's public/ dir (previews and designs have no /images/*).
const FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>" +
      "<rect width='100%' height='100%' fill='#f2faf6'/>" +
      "<circle cx='400' cy='268' r='56' fill='none' stroke='#abacac' stroke-width='6'/>" +
      "<path d='M368 296l24-32 18 22 14-16 26 26z' fill='#abacac'/>" +
      "</svg>",
  );

const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(
  { src, fill, priority, quality, placeholder, blurDataURL, unoptimized, loader, style, ...rest },
  ref,
) {
  const resolved = typeof src === "string" ? src : src?.src;
  const fillStyle: React.CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : undefined;
  return (
    <img
      ref={ref}
      src={resolved}
      style={{ ...fillStyle, ...style }}
      onError={(e) => {
        const t = e.currentTarget;
        if (t.src !== FALLBACK) t.src = FALLBACK;
      }}
      {...rest}
    />
  );
});

export default Image;
