"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { IconCircleCaretRight } from "@tabler/icons-react";
import Blob from "./Blob";
import { fadeIn } from "@/utils/variants";

const companyLogos = [
  {
    src: "/icons/companies1.svg",
    alt: "Company logo 1",
  },
  {
    src: "/icons/companies2.svg",
    alt: "Company logo 2",
  },
  {
    src: "/icons/companies3.svg",
    alt: "Company logo 3",
  },
  {
    src: "/icons/companies4.svg",
    alt: "Company logo 4",
  },
  {
    src: "/icons/companies5.svg",
    alt: "Company logo 5",
  },
];

const chatMessages = [
  { text: "Nunc, at libero neque", type: "received" },
  { text: "Viverra sed", type: "received" },
  { text: "Turpis platea nunc mattis", type: "sent" },
  { text: "Vitae viverra ut non", type: "sent" },
];

const Header = () => {
  return (
    <section className="flex justify-center items-center h-full text-[#0c182b] my-12 lg:my-28">
      <div className="max-w-screen-2xl h-full lg:h-[510px] flex flex-col md:flex-row justify-center items-center p-4 gap-6 md:gap-2 ">
        {/* Text Section */}
        <div className=" w-full h-full flex flex-col gap-4 lg:gap-8 justify-center items-start">
          <motion.div
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:text-[72px] text-[40px] flex flex-col justify-center items-center gap-4  w-full"
          >
            <h1 className="w-full font-bold lg:font-extrabold leading-12 lg:leading-19">
              <span className="relative">
                Teach{" "}
                <Image
                  src="/risk.svg"
                  width={100}
                  height={100}
                  alt="scribble"
                  className="absolute w-42 right-1 -bottom-1 sm:w-50 -z-[10] sm:right-4 sm:bottom-0"
                />
              </span>
              students worldwide
            </h1>
            <motion.p
              variants={fadeIn("top", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[16px] lg:text-[20px] text-[#0F172A]"
            >
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full h-auto justify-start items-center gap-3 lg:gap-6 "
          >
            <Button className="w-[150px] h-[45px] sm:w-[260px] sm:h-[64px] text-[16px] lg:text-[24px] bg-[#ea580b] hover:scale-105 transition-all duration-300 py-2 px-4 rounded-md">
              Request Demo
            </Button>

            <motion.div
              variants={fadeIn("top", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex w-full h-auto justify-start gap-2 items-center group"
            >
              <IconCircleCaretRight
                stroke={2}
                size={28}
                className=" text-[#5f8ff1] group-hover:scale-105 transition-all duration-300"
              />
              <Button
                variant="link"
                className="text-[16px] lg:text-[20px] sm:text-xl font-medium p-0 text-[#5f8ff1] hover:scale-105 transition-all duration-300"
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn("top", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full mt-4 lg:mt-15"
          >
            <div className="flex justify-start items-start flex-col mr-4 text-[16px] text-[#475569]">
              <p className="">Trusted by</p>
              <p className="">leading companies</p>
            </div>
            <div className="flex justify-center items-center gap-4 lg:gap-8">
              {companyLogos.map((logo, index) => (
                <Image
                  key={index}
                  alt={logo.alt}
                  src={logo.src}
                  width={50}
                  height={50}
                  quality={100}
                  className="h-6 w-6 lg:h-8 lg:w-8"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("top", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex w-full lg:h-full justify-center items-center h-[400px] "
        >
          <div className="relative w-full h-full flex flex-col justify-end items-center -z-20">
            <div className="absolute -top-32 -right-5 lg:-top-18 lg:-right-16 flex flex-col gap-3 justify-center items-center w-[250px] h-[400px] z-20 ">
              {chatMessages.map((msg, index) => {
                const isSent = msg.type === "sent";
                return (
                  <motion.div
                    key={index}
                    variants={fadeIn("top", index * 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`w-auto px-3 py-1  lg:px-4 lg:py-2 text-[12px] lg:text-[18px] ${
                      isSent
                        ? "bg-[#324154] text-white shadow-lg self-end rounded-lg rounded-bl-none"
                        : "bg-[#f0f4f7] text-[#1d2538] shadow-lg self-end rounded-lg rounded-br-none"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                );
              })}
            </div>
            <div className="h-full w-full flex justify-start items-end ">
              <Image
                src="/people/peopleHeader1.png"
                width={260}
                height={340}
                alt="Icons"
                className="ml-2 lg:ml-10 z-10"
              />
              <Image
                src="/icons/iconHeaderStarOrange.svg"
                width={250}
                height={250}
                quality={100}
                alt="Icons"
                className="absolute z-5 bottom-0 left-12 h-[300px] w-auto"
              />
            </div>
            <div className="absolute -bottom-12 -left-10 flex justify-start">
              <Blob
                containerStyle="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] xl:w-[360px] xl:h-[360px] -z-10"
                color="#facc16"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center-z-20">
            <div className="relative flex justify-end">
              <Image
                src="/people/peopleHeader2.png"
                width={260}
                height={340}
                alt="Icons"
                className="ml-4 w-
                height={340}"
              />
              <Image
                src="/icons/iconHeaderStarYellow.svg"
                width={300}
                height={300}
                quality={100}
                alt="Icons"
                className="absolute -z-5 top-0 right-0 h-[300px] w-auto"
              />
            </div>

            <div className=" z-20 w-full h-full flex justify-center items-center">
              <Image
                src="/icons/IconsHeader.svg"
                width={150}
                height={150}
                alt="Icons"
                className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
