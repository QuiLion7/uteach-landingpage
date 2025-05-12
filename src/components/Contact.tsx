"use client";

import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Contact = () => {
  return (
    <section className="bg-[#e06119] text-white py-15">
      <div className="container mx-auto px-4 max-w-screen-2xl gap-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="w-full text-center">
            <motion.h2
              variants={fadeIn("top", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[32px] sm:text-[56px] font-extrabold mb-4"
            >
              Ready for your next project?
            </motion.h2>
            <motion.p
              variants={fadeIn("top", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[18px] sm:text-[32px] font-light"
            >
              Sit elit feugiat turpis sed integer integer accumsan turpis.
            </motion.p>
          </div>
          <div className="flex justify-center items-center w-full">
            <form className="flex w-full flex-col justify-center items-center gap-8">
              <motion.div
                variants={fadeIn("top", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-[550px] flex flex-col justify-center items-center"
              >
                <label
                  htmlFor="email"
                  className="block w-full text-start text-[18px] mb-4 "
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full  h-[50px] bg-white text-[#0f172a] "
                />
              </motion.div>
              <motion.div
                variants={fadeIn("top", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-[550px] flex flex-col justify-center items-center"
              >
                <label
                  htmlFor="message"
                  className="block w-full text-start text-[18px] mb-4 "
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="What are you say ?"
                  className="w-full h-[80px] bg-white text-[#0f172a] "
                />
              </motion.div>
              <motion.div
                variants={fadeIn("top", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full text-center"
              >
                <Button className="w-[200px] h-[56px] sm:w-[260px] sm:h-[64px] text-xl sm:text-2xl bg-[#0f172a] text-white py-2 px-4 rounded-md hover:scale-105 transition-all duration-300">
                  Request Demo
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
