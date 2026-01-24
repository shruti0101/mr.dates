import React from "react";
import Image from "next/image";

const Countup = () => {
  return (
    <section
      style={{ backgroundImage: "url(/check/bgcount.jpg)" }}
      className="py-20 bg-contain  bg-center xl:bg-fixed  xl:bg-cover "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center
                     rounded-3xl px-8 py-15
                     bg-gradient-to-r from-[#62493E] to-[#62493E]
                     text-white"
        >
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center gap-4 relative">
            <Image alt="logistics" width={100} height={100} src="/countup/delivery.gif" />
            <p className="text-xl font-medium leading-snug">
              Reliable Supply<br />& Logistics
            </p>
            <span className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2 h-20 w-px bg-white/40" />
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center gap-4 relative">
            <Image alt="partnerships" width={100} height={100} src="/countup/pay.gif" />
            <p className="text-xl font-medium">
              Trusted Trade<br />Partnerships
            </p>
            <span className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2 h-20 w-px bg-white/40" />
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center gap-4 relative">
            <Image alt="quality" width={100} height={100} src="/countup/quality.gif" />
            <p className="text-xl font-medium">
              Quality-Checked<br />& Hygienic Processing
            </p>
            <span className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2 h-20 w-px bg-white/40" />
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center gap-4">
            <Image alt="experience" width={100} height={100} src="/countup/reward.gif" />
            <p className="text-xl font-medium">
              Years of Industry<br />Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countup;
