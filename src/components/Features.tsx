"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Blob from "./Blob";
import { Badge } from "./ui/badge";
import { fadeIn } from "@/utils/variants";

const Features = () => {
  return (
    <section className="text-[#0c182b] pt-3 sm:py-10 flex flex-row justify-center items-center h-[800px] lg:h-[570px]">
      <div className="max-w-screen-2xl flex flex-col lg:flex-row w-full h-full justify-center items-center px-4 gap-2 overflow-hidden">
        <div className=" w-full h-auto lg:h-full flex flex-col gap-2 sm:gap-8 justify-start items-center mb-10">
          <motion.div
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className=" sm:text-[56px] text-[24px] font-bold w-full"
          >
            <h1 className=" w-full font-extrabold">
              All the cool{" "}
              <span className="relative">
                features
                <Image
                  src="/risk.svg"
                  width={215}
                  height={150}
                  alt="scribble"
                  className="absolute -z-[10] right-0 bottom-0"
                />
              </span>
            </h1>
          </motion.div>
          <motion.p
            variants={fadeIn("top", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="tex-[16px] sm:text-[20px]"
          >
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </motion.p>
          <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full h-auto justify-start items-center group"
          >
            <Button
              variant="link"
              className="text-[16px] p-0 text-[#5f8ff1] sm:text-xl hover:scale-105 transition-all duration-300"
            >
              View all the features
            </Button>
            <IconArrowNarrowRight
              stroke={2}
              size={30}
              className="group-hover:scale-105 ml-2 lg:ml-0 transition-all duration-300 text-[#5f8ff1]"
            />
          </motion.div>
        </div>
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 mb-10 ">
          <div className="w-full h-full flex  justify-center items-center ">
            <div className="w-auto sm:w-[500px] h-full flex sm:flex-row justify-start items-center gap-5 ">
              {/* CARD */}
              <motion.div
                variants={fadeIn("top", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="w-[225px] h-[232px] z-10 bg-white shadow-2xl rounded-2xl p-4"
              >
                <div className="w-full h-full flex flex-col justify-between items-start gap-1">
                  <Badge className="text-[14px] bg-[#dae9fe] text-[#1a3faf]">
                    Popular
                  </Badge>
                  <h1 className="text-[20px] font-medium w-full leading-6">
                    Design for how people think
                  </h1>
                  <p className="text-[14px] ">
                    Aliquam ut euismod condimentum elementum ultricies volutpat
                    sit non.
                  </p>
                  <Button
                    variant="link"
                    className="text-[14px] text-[#2365e8] font-medium w-full border-3 border-[#2365e8] mt-1"
                  >
                    Take Lesson
                  </Button>
                </div>
              </motion.div>

              {/* IMAGES */}
              <motion.div
                variants={fadeIn("top", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="relative hidden sm:flex justify-center items-end h-full p-0 z-10 "
              >
                <Image
                  src="/people/peopleDesign3.png"
                  width={190}
                  height={148}
                  alt="Picture"
                  className="z-10 rounded-sm"
                />
                <Image
                  src="/people/peopleDesign4.png"
                  width={80}
                  height={80}
                  alt="Picture"
                  className="z-10 absolute bottom-4 -right-12 rounded-full"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("top", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="w-auto sm:w-[500px] h-full z-10 flex justify-center items-center gap-5 "
          >
            <Image
              src="/people/peopleDesign1.png"
              width={280}
              height={179}
              alt="Picture"
              className="z-10 rounded-sm object-cover"
            />
            <Image
              src="/people/peopleDesign2.png"
              width={210}
              height={179}
              alt="Picture"
              className="z-10 rounded-sm object-cover hidden sm:block"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("top", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="-z-5 lg:z-10 absolute right-30 w-auto h-[480px] flex justify-center items-center"
          >
            <Image
              src="/icons/icons.svg"
              width={100}
              height={100}
              quality={100}
              alt="Icons"
              className="-z-5 right-30 w-auto lg:h-full"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("top", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute flex justify-start"
          >
            <Blob
              containerStyle="w-[310px] h-[310px] sm:w-[420px] sm:h-[420px] lg:w-[550px] lg:h-[550px] -z-10"
              color="#fb933c"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
