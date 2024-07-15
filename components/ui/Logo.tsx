"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        alt="logo"
        width="100"
        height="100"
        src="/images/ecimlogoblue.png"
      />
    </Link>
  );
};

export default Logo;
