
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export const Hero = () => {
  const isMobile = useIsMobile();
  
  return <section className="w-full relative overflow-hidden my-0 mx-0 py-0">
      <div className="w-full">
        <img 
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200" 
          className={`${isMobile ? 'h-[300px] object-left' : 'w-full'} object-cover`} 
          alt="Hero image of trees" 
        />
      </div>
      
      {isMobile ? (
        // Mobile view - content below image, moved 50px up
        <div className="w-[90%] p-4 mx-auto -mt-[50px] my-4">
          <div className="max-w-[800px]">
            <span className="text-[#32373E] text-sm tracking-[0.16px] uppercase block font-normal">
              Eyeglasses with
            </span>
            <h1 className="text-[#32373E] text-3xl font-[750] leading-none mt-2">
              ZEISS premium lenses
            </h1>
            <p className="text-[#32373E] text-2xl leading-[30px] mt-2 font-thin">
              from our authorised retail partners.
            </p>
            <Button className="mt-6 text-white bg-[#0072EF] px-6 py-2 text-sm rounded-[3px] font-medium tracking-[1px] hover:bg-[#0058B8] transition-colors">
              Shop now
            </Button>
          </div>
        </div>
      ) : (
        // Desktop view - absolute positioning
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-[50%] p-8 bg-opacity-90 bg-white/0 mx-0 my-0">
          <div className="max-w-[800px]">
            <span className="text-[#32373E] text-base tracking-[0.16px] uppercase block font-normal">
              Eyeglasses with
            </span>
            <h1 className="text-[#32373E] text-5xl font-[750] leading-none mt-2">
              ZEISS premium lenses
            </h1>
            <p className="text-[#32373E] text-5xl leading-[52px] mt-2 font-thin">
              from our authorised retail partners.
            </p>
            <Button className="mt-6 text-white bg-[#0072EF] px-8 py-3 rounded-[3px] font-medium tracking-[1px] hover:bg-[#0058B8] transition-colors">
              Shop now
            </Button>
          </div>
        </div>
      )}
    </section>;
};
