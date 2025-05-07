
import React from 'react';

export const BannerTeaser = () => {
  return (
    <div className="w-full max-w-[1152px] mx-auto mb-8">
      <div className="relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d0bd0fa9486fd8a0dba86d5e5aba1f1cf40a09ac?placeholderIfAbsent=true"
          className="aspect-[2.27] object-contain w-full"
          alt="Banner"
        />
        <div className="absolute top-0 right-0 w-[563px] bg-[#F2F5F8] p-10">
          <h2 className="text-2xl text-[#32373E] tracking-[0.24px]">
            <span className="font-bold block">Special offers available</span>
            <span className="font-light block">Discover exclusive deals on premium eyewear.</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs text-[#0072EF] font-medium tracking-[0.5px] mt-8 hover:text-[#0058B8] transition-colors"
          >
            <span>View special offers</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/4a0288bd6dab116a0ac29b5b91b38dc01d6ca922?placeholderIfAbsent=true" className="w-3 h-3" alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
