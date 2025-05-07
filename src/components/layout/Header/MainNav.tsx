
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';

export const MainNav = () => {
  const isMobile = useIsMobile();
  
  return <div className="justify-center items-center flex min-h-[96px] w-full bg-white pt-0 pb-0 px-4">
      <div className="self-stretch flex min-w-60 w-full max-w-[1440px] items-center flex-wrap flex-1 shrink basis-[0%] my-auto px-0">
        <div className="justify-center items-center self-stretch flex w-12 my-auto py-6">
          <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d3594334ba36efbe4d3ab0c6a39582426c65d943?placeholderIfAbsent=true" className="aspect-[1] object-contain w-12 self-stretch my-auto" alt="Logo" />
        </div>
        
        {!isMobile ? (
          <nav className="items-center self-stretch flex min-w-60 gap-8 text-base text-[#32373E] font-normal tracking-[0.08px] leading-[1.4] flex-wrap my-auto">
            <a href="#" className="text-[#32373E] self-stretch gap-2 my-auto hover:text-[#0072EF] transition-colors px-[32px]">
              Browse shop
            </a>
            <a href="#" className="text-[#32373E] self-stretch min-w-60 gap-2 my-auto hover:text-[#0072EF] transition-colors">
              Authorized ZEISS retail partners
            </a>
            <a href="#" className="text-[#32373E] self-stretch gap-2 my-auto hover:text-[#0072EF] transition-colors">
              ZEISS premium lenses
            </a>
            <a href="#" className="text-[#32373E] self-stretch gap-2 my-auto hover:text-[#0072EF] transition-colors">
              Help & contact
            </a>
            <div className="items-center self-stretch flex gap-2 whitespace-nowrap my-auto cursor-pointer hover:text-[#0072EF] transition-colors">
              <span className="text-[#32373E] self-stretch my-auto">More</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9a2106237c773afdd7dee4392dc66644e5e585f9?placeholderIfAbsent=true" className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto" alt="More" />
            </div>
          </nav>
        ) : null}
        
        <div className="items-center self-stretch flex h-7 gap-8 flex-1 shrink basis-24 my-auto justify-end">
          <button className="items-center self-stretch flex gap-2 w-5 my-auto hover:opacity-80 transition-opacity">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/cdbd1c77c116aef56b1db1b0194d7dac19d8b28a?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" alt="Search" />
          </button>
          <button className="items-center self-stretch flex gap-2 w-5 my-auto hover:opacity-80 transition-opacity">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/81be4c2c7529580852563479f0f6ef3bb57329d1?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" alt="Cart" />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/aefcdd5d3b3929d1323ff04be619f0c197dd8fb8?placeholderIfAbsent=true" className="aspect-[1] object-contain w-10" alt="Account" />
          </button>
          
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <button className="ml-2 hover:opacity-80 transition-opacity">
                  <Menu size={24} color="black" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] bg-white">
                <div className="flex flex-col gap-6 pt-6">
                  <a href="#" className="text-[#32373E] text-lg font-normal hover:text-[#0072EF] transition-colors">
                    Browse shop
                  </a>
                  <a href="#" className="text-[#32373E] text-lg font-normal hover:text-[#0072EF] transition-colors">
                    Authorized ZEISS retail partners
                  </a>
                  <a href="#" className="text-[#32373E] text-lg font-normal hover:text-[#0072EF] transition-colors">
                    ZEISS premium lenses
                  </a>
                  <a href="#" className="text-[#32373E] text-lg font-normal hover:text-[#0072EF] transition-colors">
                    Help & contact
                  </a>
                  <a href="#" className="text-[#32373E] text-lg font-normal hover:text-[#0072EF] transition-colors">
                    More
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>;
};
