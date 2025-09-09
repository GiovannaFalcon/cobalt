import Image from "next/image";

import logo from "@/assets/logo.png";

import { Button } from "@/components/Button";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div className="absolute h-[700px] w-[1600px] top-0 left-1/2 -translate-x-1/2 bg-[#5EB0EF]/30 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>
      <div className="ml-14 z-10">
        <Image
          src={logo}
          alt="Logo Cobalt"
          width={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center gap-x-8 mr-14 z-10">
        <span className="font-medium cursor-pointer">Blog</span>
        <Button></Button>
      </div>
    </nav>
  );
}
