"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import Product1 from "@/assets/product1.png";
import Product2 from "@/assets/product2.png";
import Product3 from "@/assets/product3.png";
import Product4 from "@/assets/product4.png";
import Product5 from "@/assets/product5.png";

import { Card } from "@/components/Card";

const products = [
  {
    image: Product1,
    title: "Insights at your fingertips",
    description:
      "All your data and finances in one place to provide quick answers and make decisions instantly.",
  },
  {
    image: Product2,
    title: "Manage in real time",
    description:
      "Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.",
  },
  {
    image: Product3,
    title: "Important business alerts",
    description:
      "Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.",
  },
];

export function Products() {
  return (
    <section className="mb-40">
      <div className="ml-46 mb-10">
        <h1 className="max-w-[560px] text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent">
          Everything you need. Nothing you don’t.
        </h1>
        <p className="mt-4 max-w-[440px] text-[#A1A1AA]">
          Financial management and visibility in one place. Experience
          <span className="font-semibold text-[#E4E4E7]">
            {" "}
            a flexible toolkit
          </span>{" "}
          that makes every task feel like a breeze.
        </p>
      </div>
      <div className="flex gap-8 justify-center flex-wrap">
        {products.map((p, idx) => (
          <Card
            key={idx}
            image={p.image}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
      <div className="flex gap-5">
        <motion.div
          className="border border-[#27272a] rounded-3xl bg-[#18181b]/50 p-6 w-full max-w-[700px] mt-10 ml-44"
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
            src={Product4}
            alt="Image Product"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2 mt-20">
            Connect all your apps
          </h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[300px]">
            Bring your data with our built-in integrations for accounting,
            revenue tools and banking.
          </p>
        </motion.div>

        <motion.div
          className="border border-[#27272a] rounded-3xl bg-[#18181b]/50 p-6 w-full max-w-[500px] mt-10 ml-6"
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
            src={Product5}
            alt="Image Product"
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold text-white mb-2 mt-2">
            Connect all your apps
          </h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[300px]">
            Bring your data with our built-in integrations for accounting,
            revenue tools and banking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
