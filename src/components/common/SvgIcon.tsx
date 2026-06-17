export function SvgIcon({
    src,
    className = "h-6 w-6",
    color,
  }: {
    src: string;
    className?: string;
    color: string;
  }) {
    return (
      <span
        className={`inline-block ${className}`}
        style={{
          backgroundColor: color,
          WebkitMask: `url(${src}) center / contain no-repeat`,
          mask: `url(${src}) center / contain no-repeat`,
        }}
        aria-hidden
      />
    );
  }