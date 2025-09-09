import Image from "next/image";

import TwitterIcon from "@/assets/twitter.png";
import LinkedInIcon from "@/assets/linkedin.png";
import FacebookIcon from "@/assets/facebook.png";

const redes = [
  {
    titulo: "Twitter",
    href: "https://twitter.com",
    image: TwitterIcon,
  },
  {
    titulo: "LinkedIn",
    href: "https://linkedin.com",
    image: LinkedInIcon,
  },
  {
    titulo: "Facebook",
    href: "https://facebook.com",
    image: FacebookIcon,
  },
];

export function Footer() {
  return (
    <footer className="relative  mt-30 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#5EB0EF]/30 [mask-image:radial-gradient(50%_80%_at_bottom_center,black,transparent)] z-0"></div>
      <div className="relative z-10">
        <div className="w-full flex justify-center">
          <div className="h-px w-[80%] rounded-3xl bg-[#71717A]"></div>
        </div>
        <div className="flex justify-start ml-38 mt-8 gap-x-4 text-[#71717A] z-30">
          <p className="hover:text-[#e1e1e7]">
            &copy; 2025 Cobalt Financial Technologies Inc.
          </p>
          <p className="hover:text-[#e1e1e7]">Privacy Policy</p>
          <p className="hover:text-[#e1e1e7]">Terms of Use</p>
          <div className="flex gap-x-4 ml-auto mr-40">
            {redes.map((rede) => (
              <a
                key={rede.titulo}
                href={rede.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={rede.image}
                  alt={rede.titulo}
                  width={18}
                  className="hover:text-[#e1e1e7]"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-6 ml-40 mt-6 text-[#71717A]">
          <p className="max-w-[820px]">
            Cobalt is a trademark or registered trademark of Cobalt Financial
            Technologies Inc. Any other trademarks are the property of their
            respective owners. Unless otherwise noted, use of third party logos
            does not imply endorsement of, sponsorship of, or affiliation with
            Cobalt.
          </p>
          <p className="max-w-[880px] mb-20">
            Cobalt is a financial technology company, not a bank. Banking
            services are provided by Celtic Bank and Evolve Bank & Trust®,
            Members FDIC.
          </p>
        </div>
      </div>
    </footer>
  );
}
