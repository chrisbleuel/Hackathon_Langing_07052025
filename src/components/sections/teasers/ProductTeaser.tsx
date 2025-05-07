import React from 'react';

export const ProductTeaser = () => {
  return (
    <div className="w-full max-w-[1152px] mx-auto bg-white mb-8">
      <div className="relative">
        <div className="w-[563px] bg-[#F2F5F8] p-10">
          <h2 className="text-2xl text-[#32373E] tracking-[0.24px]">
            <span className="font-bold block leading-none">ZEISS ClearView</span>
            <span className="font-light block leading-[30px] mt-2">
              Not your average single vision lens. Want to know more?
            </span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs text-[#0072EF] font-medium tracking-[0.5px] mt-8 hover:text-[#0058B8] transition-colors"
          >
            <span>Learn everything about ZEISS lenses.</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ad2107f93538ea684f028cc0ea50b507e0d68a29?placeholderIfAbsent=true" className="w-3 h-3" alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
