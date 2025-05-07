
import React from 'react';
import { Button } from '@/components/ui/button';
export const Hero = () => {
  return <section className="w-full relative overflow-hidden my-0 mx-0 py-0">
      <div className="w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/b2449d9df6265c8200890e9342c69ee3d54330b2?placeholderIfAbsent=true" className="w-full object-cover" alt="Hero image" />
      </div>
      <div className="absolute top-1/2 left-[64px] transform -translate-y-1/2 w-[31%] bg-opacity-90 p-8 bg-white/0 mx-0 my-0">
        <div className="max-w-[564px]">
          <span className="text-[#32373E] text-base tracking-[0.16px] uppercase block font-normal">
            Eyeglasses with
          </span>
          <h1 className="text-[#32373E] text-5xl font-[750] leading-none mt-2">
            ZEISS premium lenses
          </h1>
          <p className="text-[#32373E] text-5xl leading-[52px] mt-2 font-thin">
            from our authorised retail partners.
          </p>
          <Button className="mt-8 text-white bg-[#0072EF] px-8 py-3 rounded-[3px] font-medium tracking-[1px] hover:bg-[#0058B8] transition-colors">
            Shop now
          </Button>
        </div>
      </div>
    </section>;
};
