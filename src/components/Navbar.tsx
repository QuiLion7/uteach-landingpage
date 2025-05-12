"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [openSheet, setOpenSheet] = useState(false);

  const navigationLinks = [
    { label: "Products", path: "/" },
    { label: "Solutions", path: "#" },
    { label: "Pricing", path: "#" },
    { label: "Resources", path: "#" },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center mr-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo-teach.png"
              width={80}
              height={50}
              quality={100}
              alt="logo"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center w-full md:flex justify-between">
          <ul className="flex items-center gap-7">
            {navigationLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <motion.li
                  key={link.label}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-[#e06119]" : "hover:text-[#e06119]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-[#e06119]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-7">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Button
                variant="secondary"
                className="bg-transparent text-black shadow-none dark:text-white"
              >
                Log In
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button
                variant="outline"
                className="bg-transparent text-black border-2 border-black dark:text-white"
              >
                Sign Up Now
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-end gap-2 pr-2 md:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu Teach</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-primary">
                  {" "}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/logo-teach.png"
                      width={80}
                      height={50}
                      quality={100}
                      alt="logo"
                    />
                  </motion.div>
                </SheetTitle>
              </SheetHeader>
              <nav>
                <ul className="flex flex-col p-3 gap-2">
                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.path}
                          onClick={() => {
                            setOpenSheet(false);
                          }}
                          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                            isActive ? "text-[#e06119] " : "hover:bg-muted"
                          }`}
                        >
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
