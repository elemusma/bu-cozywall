import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <>
      <Link href="/">
        <Image
          src="/logo.jpeg"
          style={{ margin: "auto" }}
          className={`max-w-full ${className}`}
          alt="Cozy Wall Foam Insulation"
          width={1000}
          height={1000}
        />
      </Link>
    </>
  );
}
