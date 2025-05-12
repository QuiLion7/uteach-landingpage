"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { fadeIn } from "@/utils/variants";

const FloatingElements = () => {
  return (
    <section className="bg-[#facc16] text-[#0c182b] py-3 sm:py-20 flex flex-row justify-center items-center h-[650px] sm:h-[570px]">
      <div className="relative flex flex-row w-full h-full justify-center items-center max-w-screen-2xl px-4">
        <motion.div
          variants={fadeIn("top", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute hidden sm:flex justify-between w-full h-full items-center"
        >
          <Image
            src="/left.png"
            alt="background left"
            width={320}
            height={570}
          />
          <Image
            src="/right.png"
            alt="background right"
            width={320}
            height={570}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("top", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute flex flex-col sm:hidden justify-between w-full h-full items-center px-4"
        >
          <Image
            src="/top.png"
            alt="background left"
            width={320}
            height={570}
          />
          <Image
            src="/bottom.png"
            alt="background right"
            width={320}
            height={570}
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-8 z-10">
          <div className="w-full h-full flex flex-col text-center justify-center items-center">
            <motion.h2
              variants={fadeIn("top", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[24px] sm:text-[56px] font-extrabold mb-4"
            >
              Join a world of learning
            </motion.h2>
            <div className="flex flex-col justify-center items-center w-full h-full gap-4">
              <motion.p
                variants={fadeIn("top", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-[16px] sm:text-[20px]"
              >
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              </motion.p>
              <motion.p
                variants={fadeIn("top", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-[16px] sm:text-[20px]"
              >
                Risus elit et fringilla habitant ut facilisi.
              </motion.p>
            </div>
          </div>
          <div>
            <motion.div
              variants={fadeIn("top", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full text-center"
            >
              <Button className="w-[200px] h-[56px] sm:w-[260px] sm:h-[64px] text-xl sm:text-2xl bg-[#ea580b] hover:scale-105 transition-all duration-300 py-2 px-4 rounded-md">
                Request Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingElements;
