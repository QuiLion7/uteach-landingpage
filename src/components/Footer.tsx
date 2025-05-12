"use client";

import {
  IconArrowNarrowRight,
  IconCurrencyEuro,
  IconWorld,
  IconAccessible,
} from "@tabler/icons-react";
import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "@/utils/variants";

interface FooterLink {
  text: string;
  href: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface NavSection {
  title: string;
  links: FooterLink[];
}

const navSections: NavSection[] = [
  {
    title: "Product",
    links: [
      { text: "Pricing", href: "#" },
      { text: "Overview", href: "#" },
      { text: "Browse", href: "#" },
      { text: "Accessibility", href: "#", badge: "BETA" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { text: "Brainstorming", href: "#" },
      { text: "Ideation", href: "#" },
      { text: "Wireframing", href: "#" },
      { text: "Research", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Tutorials", href: "#" },
      { text: "FAQs", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Contact Us", href: "#" },
      { text: "Developers", href: "#" },
      { text: "Documentation", href: "#" },
      { text: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "#" },
      { text: "Press", href: "#" },
      { text: "Events", href: "#" },
      {
        text: "Request Demo",
        href: "#",
        icon: <IconArrowNarrowRight stroke={2} size={16} />,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-2 w-full h-full bg-[#0f172a] text-white">
      <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-6 w-full">
          <div className="sm:col-span-1 w-full h-full">
            <motion.div
              variants={fadeIn("top", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="h-full w-full justify-start items-start mb-8"
            >
              <Image
                src="/Logo-colored.png"
                width={180}
                height={50}
                quality={100}
                alt="logo"
              />
            </motion.div>
          </div>

          <div className="sm:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5  gap-2 md:gap-8">
            {navSections.map((section, index) => (
              <div key={index} className="w-full md:w-auto">
                <motion.h3
                  variants={fadeIn("top", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white text-[16px] font-medium mb-6"
                >
                  {section.title}
                </motion.h3>
                <div className="space-y-2 mb-6">
                  {section.links.map((link, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("top", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-center"
                    >
                      <Link
                        href={link.href}
                        className="group hover:text-[#e06119] text-[16px] text-white text-sm flex items-center mb-4"
                      >
                        {link.text}
                        {link.badge && (
                          <Badge className="ml-2 bg-[#e06119] text-white text-[16px] rounded-md group-hover:text-[#e06119] group-hover:bg-white">
                            {link.badge}
                          </Badge>
                        )}
                        {link.icon && <span className="ml-1">{link.icon}</span>}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeIn("top", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-gray-700 my-6 w-full"
        ></motion.div>

        <div className="flex flex-col gap-6 sm:flex-row justify-between items-start md:items-center mt-6 text-[16px] text-white">
          <motion.div
            variants={fadeIn("top", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="hover:text-[#e06119] sm:flex-1"
          >
            uteach @ 2023. All rights reserved.
          </motion.div>

          <div className="flex w-full h-full justify-center sm:justify-end items-center gap-5 sm:gap-8 sm:flex-3">
            <motion.div
              variants={fadeIn("top", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-between items-center gap-5 sm:gap-8"
            >
              <Link href="#" className="hover:text-[#e06119] ">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#e06119]">
                Privacy
              </Link>
              <Link href="#" className="hidden sm:block hover:text-[#e06119]">
                Contact
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn("top", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center items-center gap-5 sm:gap-8 text-white"
            >
              <button className="flex items-center hover:text-[#e06119]">
                <IconWorld size={16} className="mr-1" />
                <span>EN</span>
              </button>
              <button className="flex items-center hover:text-[#e06119]">
                <IconCurrencyEuro size={16} className="mr-1" />
                <span className="ml-1">EUR</span>
              </button>
              <a href="#" className="hover:text-[#e06119]">
                <IconAccessible size={16} className="mr-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
