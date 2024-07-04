"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <Link
              key={link.route}
              href={link.route}
              className={cn("sidebar-link", isActive && "bg-bank-gradient")}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn(isActive && "invert-0 brightness-[3]")}
                />
              </div>
              <p className={cn("sidebar-label", isActive && "!text-white")}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
