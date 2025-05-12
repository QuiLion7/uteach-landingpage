"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import { fadeIn } from "@/utils/variants";

const galleryColumns = [
  [
    {
      id: 1,
      src: "/people/students1.png",
      w: "w-15 lg:w-32",
      h: "h-23 lg:h-48",
    },
    {
      id: 2,
      src: "/people/students2.png",
      w: "w-[75px] lg:w-[172px]",
      h: "h-[110px] lg:h-[258px]",
    },
  ],
  [
    {
      id: 3,
      src: "/people/students3.png",
      w: "w-16 lg:w-32",
      h: "h-[100px] lg:h-[212px]",
    },
    {
      id: 4,
      src: "/people/students4.png",
      w: "w-16 lg:w-32",
      h: "h-[100px] lg:h-[215px]",
    },
    {
      id: 5,
      src: "/people/students5.png",
      w: "w-16 lg:w-32",
      h: "h-21 lg:h-40",
    },
  ],
  [
    {
      id: 6,
      src: "/people/students6.png",
      w: "w-16 lg:w-32",
      h: "h-[85px] lg:h-[171px]",
    },
    {
      id: 7,
      src: "/people/students7.png",
      w: "w-16 lg:w-32",
      h: "h-[85px] lg:h-[172px]",
    },
    {
      id: 8,
      src: "/people/students8.png",
      w: "w-16 lg:w-32",
      h: "h-25 lg:h-48",
    },
  ],
  [
    {
      id: 9,
      src: "/people/students9.png",
      w: "w-18 lg:w-40",
      h: "h-[110px] lg:h-[255px]",
    },
    {
      id: 10,
      src: "/people/students10.png",
      w: "w-16 lg:w-32",
      h: "h-[80px] lg:h-[165px]",
    },
  ],
];

const Students = () => {
  return (
    <section className="flex items-center justify-center w-full px-4 py-15 text-[#0f172a] bg-white">
      <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Gallery */}
        <div className="flex flex-row flex-1 justify-center w-full gap-2 lg:gap-4 order-2 lg:order-1">
          {galleryColumns.map((column, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col gap-2 lg:gap-4 justify-center ${
                colIdx === 0 ? " items-end" : ""
              }`}
            >
              {column.map((img) => (
                <motion.div
                  key={img.id}
                  className={`rounded-md shadow-md bg-center bg-contain hover:scale-105 transition-all duration-300 ${img.w} ${img.h}`}
                  style={{ backgroundImage: `url(${img.src})` }}
                  variants={fadeIn("top", img.id * 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Texto */}
        <div className="relative flex flex-col gap-6 flex-1 order-1 lg:order-2">
          <motion.h1
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full text-[24px] lg:text-[56px] font-bold lg:font-extrabold leading-8 lg:leading-15"
          >
            Meet{" "}
            <span className="relative inline-block">
              internatio
              <span className="inline-block relative">
                nal
                <Image
                  src="/icons/IconPlane.svg"
                  width={40}
                  height={40}
                  alt="plane"
                  className="absolute -top-4 left-0 lg:-top-12 lg:-left-1 w-7 h-7 lg:w-18 lg:h-18"
                />
              </span>
            </span>{" "}
            students & teachers
          </motion.h1>

          <motion.p
            variants={fadeIn("top", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className=" text-[16px] lg:text-[20px]"
          >
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi nec magna hendrerit. Placerat ipsum sit tellus urna,
            faucibus aenean lorem faucibus integer.
          </motion.p>
          <motion.div
            variants={fadeIn("top", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-2 group"
          >
            <Button
              variant="link"
              className="text-[#5f8ff1] text-base md:text-lg p-0 hover:scale-105 transition"
            >
              Explore teachers and students
            </Button>
            <IconArrowNarrowRight className="text-[#5f8ff1] group-hover:translate-x-1 transition" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Students;
