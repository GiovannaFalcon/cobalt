"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export function Card({ image, title, description }: CardProps) {
  return (
    <motion.div className="border border-[#27272a] rounded-3xl bg-[#18181b]/50 p-6 w-full max-w-[390px]" 
    whileHover={{
        scale: [null, 1.10, 1.1],
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
      <Image src={image} alt={title} className="rounded-xl mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2 ">{title}</h3>
      <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[300px]">
        {description}
      </p>
    </motion.div>
  );
}
