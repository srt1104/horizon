"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <section className="max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className="flex cursor-pointer items-center gap-1 px-4"
              >
                <Image
                  src="/icons/logo.svg"
                  alt="logo"
                  width={34}
                  height={34}
                />
                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                  Horizon
                </h1>
              </Link>
            </SheetTitle>
            <SheetDescription className="hidden">MobileNav</SheetDescription>
          </SheetHeader>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        key={link.route}
                        href={link.route}
                        className={cn(
                          "mobilenav-sheet_close w-full",
                          isActive && "bg-bank-gradient"
                        )}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={cn(isActive && "invert-0 brightness-[3]")}
                        />
                        <p
                          className={cn(
                            "text-16 font-semibold text-black-2",
                            isActive && "!text-white"
                          )}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
