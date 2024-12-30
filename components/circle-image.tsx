"use client";

import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-[-100px] right-[-100px] hidden md:inline-block md:absolute">
      <Image
        src="/circles.png"
        width="600"
        height="600"
        className="w-full h-full animate-rotateAndFloat"
        alt="Planet"
      />
    </div>
  );
};

export default CircleImage;
