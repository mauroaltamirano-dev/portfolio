interface CustomIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const RsPackIcon: React.FC<CustomIconProps> = ({
  size = 24,
  color = "#F7DF1E",
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="https://assets.rspack.rs/rspack/rspack-logo.svg"
        alt="RsPack"
        className="w-full h-full object-contain"
        style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
      />
    </div>
  );
};

// Puedes agregar más iconos personalizados aquí
export const CustomIcon: React.FC<
  CustomIconProps & { src: string; alt: string }
> = ({ src, alt, size = 24, color = "#000", className = "" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
      />
    </div>
  );
};
