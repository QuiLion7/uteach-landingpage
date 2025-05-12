"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const stats = [
  {
    number: "195",
    label: "user countries",
    icon: "/icons/IconHeart.svg",
  },
  {
    number: "1M",
    label: "valued teachers",
    icon: "/icons/IconDiamond.svg",
  },
  {
    number: "17M",
    label: "happy students",
    icon: "/icons/IconMortarBoard.svg",
  },
];

const StatsSection = () => {
  return (
    <section className="flex items-center justify-center p-2 w-full h-[660px] md:h-[370px] bg-[#0f172a] text-white">
      <div className="max-w-screen-2xl flex flex-col md:flex-row w-full h-full justify-center items-center p-4 gap-2">
        {stats.map((stat, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("top", index * 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center flex-1 text-[#fdca16]"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={stat.icon}
                  width={64}
                  height={64}
                  alt={stat.label}
                  className=""
                />
              </div>
              <h3 className="text-[48px] sm:-text-[72px] font-bold mb-2">
                {stat.number}
              </h3>
              <p className="text-[16px] sm:text-[24px]">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
