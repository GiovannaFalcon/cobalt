"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import Product6 from "@/assets/product6.png";
import Product7 from "@/assets/product7.png";

export function Meet() {
  return (
    <section>
      <div className="ml-46 mb-14">
        <h1 className="max-w-[600px] text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent">
          Meet Genius
        </h1>
        <p className="mt-4 max-w-[460px] text-[#A1A1AA]">
          Our AI-driven assistant is designed to decode complex financial
          figures and
          <span className="font-semibold text-[#E4E4E7]">
            {" "}
            illuminate key trends
          </span>{" "}
          in your business.
        </p>
      </div>
      <div className="flex justify-between items-center gap-x-7 mb-40">
        <motion.div
          className="border border-[#27272a] rounded-3xl bg-[#18181b]/50 p-6 w-full ml-40"
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
            src={Product6}
            alt="Image Product"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2 ">
            Smart forecasting
          </h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[300px]">
            Just ask. With Genius by your side, navigating the financial maze
            becomes intuitive and effortless.
          </p>
        </motion.div>
        <motion.div
          className="border border-[#27272a] rounded-3xl bg-[#18181b]/50 p-6 w-full mr-40"
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
            src={Product7}
            alt="Image Product"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            Chat with Genius
          </h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[300px]">
            Just ask. With Genius by your side, navigating the financial maze
            becomes intuitive and effortless.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
