"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { IconArrowNarrowRight, IconCheck } from "@tabler/icons-react";
import Blob from "./Blob";
import { fadeIn } from "@/utils/variants";

interface SpecificationCards {
  title: string;
  label: string;
  text: string;
  badgeColor: string;
}

const specificationCards: SpecificationCards[] = [
  {
    title: "The map of mathematics",
    label: "Featured",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    badgeColor: "bg-[#f3e8ff] text-[#6c20a5]",
  },
  {
    title: "Design for how people think",
    label: "Popular",
    text: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
    badgeColor: "bg-[#dce9ff] text-[#1841b0]",
  },
  {
    title: "International & commercial law",
    label: "New",
    text: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
    badgeColor: "bg-[#dcfce7] text-[#156233]",
  },
];

const textItems = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];

const Specifications = () => {
  return (
    <section className="flex flex-row justify-center items-center h-full text-[#0c182b]">
      <div className="max-w-screen-2xl h-full lg:h-[510px] flex flex-col lg:flex-row justify-center items-center p-4 gap-2">
        {/* Text Section */}
        <div className=" w-full lg:w-[45%] h-full flex flex-col gap-4 lg:gap-8 justify-center items-start ">
          <motion.div
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:text-[56px] text-[24px] flex flex-col justify-center items-center gap-4  w-full"
          >
            <h1 className="w-full font-extrabold leading-8 lg:leading-16">
              An{" "}
              <span className="relative">
                all-in-one{" "}
                <Image
                  src="/risk.svg"
                  width={100}
                  height={100}
                  alt="scribble"
                  className="absolute w-42 right-1 -bottom-1 sm:w-66 -z-[10] sm:right-4 sm:-bottom-2"
                />
              </span>
              app that makes it easier
            </h1>
            <motion.p
              variants={fadeIn("top", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[16px] lg:text-[20px] block lg:hidden leading-5"
            >
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
              ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
              pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
              ullamcorper non viverra a, neque orci.
            </motion.p>
            <ul className="text-[20px] flex flex-col gap-5 lg:gap-3">
              {textItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn("top", index * 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <IconCheck
                    stroke={2}
                    className="w-5 h-5 mt-1 text-[#0c182b]"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full h-auto justify-start items-center group"
          >
            <Button
              variant="link"
              className="text-[16px] sm:text-xl font-medium p-0 text-[#5f8ff1] hover:scale-105 transition-all duration-300"
            >
              Find more about the app
            </Button>
            <IconArrowNarrowRight
              stroke={2}
              size={30}
              className="ml-2 lg:ml-0 text-[#5f8ff1] group-hover:scale-105 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Image & Cards Section */}
        <div className="relative w-full lg:w-[55%]  h-[400px] lg:h-full flex flex-col justify-center items-center gap-4 mb-10">
          {/* Main Image */}
          <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-full z-10 flex justify-center items-start lg:justify-end lg:items-start"
          >
            <Image
              src="/desktop.png"
              width={290}
              height={200}
              quality={100}
              alt="Picture Desktop"
              className="rounded-lg object-cover w-[290px] h-auto md:w-[500px] md:h-[300px] lg:w-[550px] lg:h-[340px]"
            />
          </motion.div>

          {/* Icons Illustration */}
          <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute -top-13 -left-5 lg:-left-20 w-auto h-[400px] lg:h-[480px] flex justify-center items-center z-5 lg:z-10"
          >
            <Image
              src="/icons/iconHeaderStarYellow.svg"
              width={100}
              height={100}
              quality={100}
              alt="Icons"
              className="w-auto h-full"
            />
          </motion.div>

          {/* Blob */}
          <motion.div
            variants={fadeIn("top", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute flex justify-start  sm:justify-center lg:justify-start items-center w-full"
          >
            <Blob
              containerStyle="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] -z-10"
              color="#fb933c"
            />
          </motion.div>

          {/* Cards */}
          <div className="absolute bottom-0 w-full p-1 h-auto flex sm:flex-row justify-center items-center gap-3">
            {specificationCards.map((spec, index) => (
              <motion.div
                key={index}
                variants={fadeIn("top", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className={`w-[260px] lg:w-[200px] h-[232px] z-10 bg-white shadow-2xl rounded-2xl p-4 ${
                  index === 2 ? "hidden sm:block lg:hidden xl:block" : ""
                }`}
              >
                <div className="w-full h-full flex flex-col justify-between items-start gap-1">
                  <Badge className={`text-[14px] ${spec.badgeColor}`}>
                    {spec.label}
                  </Badge>
                  <h2 className="text-[16px] lg:text-[20px] font-medium w-full leading-6">
                    {spec.title}
                  </h2>
                  <p className="text-[12px] lg:text-[14px] text-[#475569]">
                    {spec.text}
                  </p>
                  <Button
                    variant="link"
                    className="text-[14px] text-[#2365e8] font-medium w-full border-3 border-[#2365e8] mt-1"
                  >
                    Take Lesson
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
