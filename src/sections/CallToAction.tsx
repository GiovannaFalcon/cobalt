import { Button } from "@/components/Button";

export function CallToAction() {
  return (
    <section className="text-center mb-20">
      <div className="w-full flex justify-center">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <div className="">
          <h1 className="text-4xl font-semibold max-w-[620px] bg-gradient-to-r from-[#FFFFFF] to-[#71717A] text-center bg-clip-text text-transparent">
            See where financial automation can take your business.
          </h1>
          <p className="mt-6 text-gray-400">
            {
              "The first financial tool you'll love. And the last one you'll ever need."
            }
          </p>
          <div className="mt-14">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
