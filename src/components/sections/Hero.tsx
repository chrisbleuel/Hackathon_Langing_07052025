import React from 'react';

export const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="w-[69%] relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/b2449d9df6265c8200890e9342c69ee3d54330b2?placeholderIfAbsent=true"
          className="aspect-[2.99] object-contain w-full"
          alt="Hero image"
        />
      </div>
      <div className="absolute top-[83px] right-0 w-[31%] bg-white p-8">
        <div className="max-w-[564px]">
          <span className="text-[#32373E] text-base font-medium tracking-[0.16px] uppercase block">
            Eyeglasses with
          </span>
          <h1 className="text-[#32373E] text-5xl font-[750] leading-none mt-2">
            ZEISS premium lenses
          </h1>
          <p className="text-[#32373E] text-5xl font-light leading-[52px] mt-2">
            from our authorised retail partners.
          </p>
          <button className="mt-8 text-white bg-[#0072EF] px-8 py-3 rounded-[3px] font-medium tracking-[1px] hover:bg-[#0058B8] transition-colors">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};
