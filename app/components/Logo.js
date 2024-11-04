import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "default" }) {
  const sizes = {
    small: { width: 32, height: 32, textSize: "text-lg" },
    default: { width: 40, height: 40, textSize: "text-xl" },
    large: { width: 60, height: 60, textSize: "text-3xl" },
  };

  const { width, height, textSize } = sizes[size] || sizes.default;

  return (
    <Link href="/" className="flex items-center gap-4">
      <div className="relative">
        <Image
          src="/logo.jpg"
          alt="Chateaux de Paris HOA"
          width={width}
          height={height}
          className="rounded-lg"
          priority
        />
      </div>
      <span className={`font-serif text-[#e5d3b3] ${textSize}`}>
        Chateaux de Paris
      </span>
    </Link>
  );
}
