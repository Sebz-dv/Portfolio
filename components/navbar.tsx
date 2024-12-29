"use client";
import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-50 flex flex-col items-center justify-center w-full bottom-6 md:bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          {itemsNavbar.map((item) => {
            const isActive = router === item.link;
            return (
              <div
                key={item.id}
                className={`relative group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ease-in-out transform ${
                  isActive
                    ? "bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    : "bg-transparent"
                } hover:scale-110`}
              >
                <Link href={item.link}>
                  <span
                    className={`text-lg md:text-xl transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-white scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.icon}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
