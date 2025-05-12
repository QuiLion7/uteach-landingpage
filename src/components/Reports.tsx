"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const reports = [
  {
    quote:
      "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    author: "Marie Poirot",
    company: "Bigapp",
    image: "/people/picture1.png",
  },
  {
    quote:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur.",
    author: "John Smith",
    company: "TechCorp",
    image: "/people/report2.png",
  },
  {
    quote:
      "Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi. Duis proin et cras aliquam.",
    author: "Sarah Johnson",
    company: "DesignHub",
    image: "/people/report3.png",
  },
  {
    quote:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    author: "Michael Brown",
    company: "InnovateCo",
    image: "/people/report4.png",
  },
  {
    quote:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet.",
    author: "Emma Wilson",
    company: "CreativeLab",
    image: "/people/report5.png",
  },
];

const Reports = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reports.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reports.length) % reports.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reports.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="bg-[#facc16] text-[#0c182b] flex justify-center items-center h-full py-10">
      <div className="relative flex w-full h-full max-w-screen-2xl p-4 items-center justify-center transition-all duration-300">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-yellow-500 transition-colors text-white hidden lg:block"
          aria-label="Previous testimonial"
        >
          <IconChevronLeft stroke={2} className="w-8 h-8 md:w-12 md:h-12" />
        </button>

        <div className="flex items-center justify-center flex-1 relative flex-col md:flex-row w-full">
          <div className="flex flex-col flex-1 min-h-[300px] w-full justify-center items-start pr-4 z-30">
            <motion.div
              variants={fadeIn("top", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 w-full mb-8 md:mb-16"
            >
              <p className="text-[18px] lg:text-[24px] ">
                {reports[currentSlide].quote}
              </p>
              <div>
                <div className="text-[18px] lg:text-[24px]">
                  {reports[currentSlide].author}
                </div>
                <div className="font-medium lg:font-bold text-[18px] lg:text-[24px]">
                  {reports[currentSlide].company}
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex gap-2">
              {reports.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  variants={fadeIn("top", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`h-2 rounded-[10px] transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-[#0c182b]" : "w-2 bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 relative flex justify-center items-center z-20 w-full h-full mt-4 sm:mt-0"
          >
            <div className="absolute w-[250px] h-[250px] sm:w-[315px] sm:h-[365px] lg:h-[490px] lg:w-[460px] top-1 sm:-top-4 md:-top-10 lg:-top-8 bg-[#0c182b] rounded-[50px] rotate-[-20deg] sm:rotate-[-30deg] -z-10" />
            <div
              className="relative w-[330px] h-[265px] sm:w-[360px] sm:h-[295px] lg:w-[500px] lg:h-[390px] border-2 border-[#0c182b] bg-cover bg-no-repeat bg-center rounded-xl z-20"
              style={{
                backgroundImage: `url(${reports[currentSlide].image})`,
              }}
            >
              <Image
                src="/icons/IconThought.svg"
                width={100}
                height={100}
                alt="Thought icon"
                className="absolute -top-8 right-6 w-7 h-7 sm:-top-10 sm:right-8 sm:w-8 sm:h-8 lg:-top-12 lg:right-16 z-30 lg:w-10 lg:h-10"
              />
              <Image
                src="/icons/iconSquares.svg"
                width={100}
                height={100}
                alt="Squares icon"
                className="absolute -bottom-8 left-6 sm:-bottom-8 sm:left-13 lg:-bottom-11 lg:left-12 z-30 w-25 h-25 lg:w-35 lg:h-35"
              />
            </div>
          </motion.div>
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-yellow-500 transition-colors hidden lg:block"
          aria-label="Next testimonial"
        >
          <IconChevronRight stroke={2} className="w-8 h-8 md:w-12 md:h-12" />
        </button>
      </div>
    </section>
  );
};

export default Reports;
