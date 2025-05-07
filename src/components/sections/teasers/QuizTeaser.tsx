
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const QuizTeaser = () => {
  const isMobile = useIsMobile();
  
  return <div className="w-full max-w-[1152px] mx-auto bg-white mb-8">
      <div className={`relative ${isMobile ? 'flex flex-col' : ''}`}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/7d9a81861b5a16c363b07dc9550249a4f3e3cb09?placeholderIfAbsent=true" 
          className={`aspect-[1.78] object-contain ${isMobile ? 'w-full' : 'w-[858px]'}`} 
          alt="Quiz banner" 
        />
        <div className={`${isMobile ? 'w-full' : 'absolute bottom-0 right-0 translate-y-[20px] w-[563px]'} bg-[#F2F5F8] p-10 my-0`}>
          <h2 className="text-2xl text-[#32373E] tracking-[0.24px]">
            <span className="font-bold block">Need help finding your new glasses?</span>
            <span className="font-light block">Take our short quiz to find your perfect pair.</span>
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-xs text-[#0072EF] font-medium tracking-[0.5px] mt-8 hover:text-[#0058B8] transition-colors">
            <span>Take the quiz</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/4a0288bd6dab116a0ac29b5b91b38dc01d6ca922?placeholderIfAbsent=true" className="w-3 h-3" alt="Arrow" />
          </a>
        </div>
      </div>
    </div>;
};
