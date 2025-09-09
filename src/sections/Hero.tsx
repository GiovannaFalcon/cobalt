"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import ArrowIcon from "@/assets/arrow.png";
import ImgBackground from "@/assets/starbackground.png";
import ProductImg from "@/assets/product.png";

import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="mt-36">
      <div className="flex justify-center">
        <Image
          src={ImgBackground}
          alt="Background"
          width={1100}
          className="absolute bg-cover"
        />
      </div>

      <div className="container">
        <div className="relative z-10">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="max-w-[730px] mx-auto text-7xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-center bg-clip-text text-transparent">
                Unleash the power of intuitive finance
              </h1>
              <p className="max-w-[720px] mx-auto text-xl text-[#A1A1AA] font-medium mt-8">
                Say goodbye to the outdated financial tools. Every small
                business owner, regardless of the background, can now manage
                their business like a pro. Simple. Intuitive. And never boring.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <Button />
            <span className="mt-8 text-[#A1A1AA] cursor-pointer font-semibold">
              Learn more
            </span>
            <Image src={ArrowIcon} alt="Arrow Down Icon" className="mt-3" />
          </div>
          <motion.div
            className="flex justify-center mt-14 mb-14"
            whileHover={{
              scale: [null, 1.1, 1.1],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Image
              src={ProductImg}
              alt="Product Image"
              width={890}
              className=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
