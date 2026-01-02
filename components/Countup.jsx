import React from 'react'
import Image from 'next/image'
const Countup = () => {
  return (
    <div>
        <section style={{backgroundImage:"url(/check/bgcount.jpg)"}} className="py-16 bg-cover bg-center bg-fixed bg-[#F0E0CE]">
  <div className="max-w-7xl mx-auto px-6">
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center
                 rounded-3xl px-8 py-12
                 bg-gradient-to-r from-[#62493E] to-[#62493E]
                 text-white"
    >
      {/* Item 1 */}
      <div className="flex flex-col items-center text-center gap-4 relative">
        <div className="text-5xl text-white">
       <Image width={100} height={100} src="/countup/delivery.gif"></Image>
        </div>
        <p className="text-lg font-medium leading-snug">
         Fast Delivery
        </p>

        {/* Divider */}
        <span className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2
                         h-20 w-px bg-white/40" />
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center text-center gap-4 relative">
        <div className="text-5xl">
       <Image width={100} height={100} src="/countup/pay.gif"></Image>
        </div>
        <p className="text-lg font-medium">
          Pay<br />On Delivery
        </p>

        <span className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2
                         h-20 w-px bg-white/40" />
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center text-center gap-4 relative">
        <div className="text-5xl">
       
       
       <Image width={100} height={100} src="/countup/quality.gif"></Image>
        </div>
        <p className="text-lg font-medium">
          100% Quality<br />Guaranteed
        </p>

        <span className="hidden md:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2
                         h-20 w-px bg-white/40" />
      </div>

      {/* Item 4 */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-5xl">
       
       <Image width={100} height={100} src="/countup/reward.gif"></Image>
        </div>
        <p className="text-lg font-medium">
          Reward Points<br />On Every Purchase
        </p>
      </div>
    </div>
  </div>
</section>





    </div>
  )
}

export default Countup