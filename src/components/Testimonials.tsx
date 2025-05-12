"use client";

import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    author: "Hellen Jummy",
    role: "Financial Counselor",
    image: "/people/girl1.svg",
  },
  {
    content:
      "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    author: "Ralph Edwards",
    role: "Math Teacher",
    image: "/people/boy1.svg",
  },
  {
    content:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet.",
    author: "Hellena John",
    role: "Psychology Student",
    image: "/people/girl2.svg",
  },
  {
    content:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    author: "David Cooper",
    role: "UI/UX Designer",
    image: "/people/boy2.svg",
  },
  {
    content:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    author: "Amanda Lima",
    role: "HR Specialist",
    image: "/people/girl3.svg",
  },
  {
    content:
      "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    author: "Lucas Rocha",
    role: "DevOps Engineer",
    image: "/people/boy3.svg",
  },
  {
    content:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    author: "Sara Vieira",
    role: "Art Director",
    image: "/people/girl4.svg",
  },
  {
    content:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    author: "Carlos Nunes",
    role: "Marketing Lead",
    image: "/people/boy4.svg",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-10 sm:py-20 w-full text-[#0c182b]">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* Header */}
        <motion.div
          variants={fadeIn("top", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-between items-center w-full mb-8"
        >
          <h2 className="text-[24px] font-bold sm:text-[56px] sm:font-extrabold">
            What everyone says
          </h2>
          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border border-[#e06119] hover:scale-105 transition-all duration-300"
              aria-label="Previous"
            >
              <IconArrowLeft className="w-6 h-6 text-[#e06119]" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border border-[#e06119] hover:scale-105 transition-all duration-300"
              aria-label="Next"
            >
              <IconArrowRight className="w-6 h-6 text-[#e06119]" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden w-full  px-1" ref={emblaRef}>
          <div className="flex gap-4 p-1 sm:p-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn("top", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-shrink-0 w-[290px] lg:w-[400px]"
              >
                <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm h-[320px] lg:h-[300px] flex flex-col justify-between text-[18px] border ">
                  <p className="text-[#0c182b] mb-2">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      quality={100}
                      className="rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#0c182b]">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-500 text-[16px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
