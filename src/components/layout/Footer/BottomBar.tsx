import React from 'react';

export const BottomBar = () => {
  return (
    <div className="justify-between items-center flex min-h-9 w-full gap-[40px_100px] text-sm text-white tracking-[0.07px] leading-none flex-wrap bg-[#32373E] py-4 px-4">
      <div className="text-white self-stretch font-bold my-auto">
        ZEISS International
      </div>
      <div className="items-center self-stretch flex min-w-60 gap-8 font-normal whitespace-nowrap text-right my-auto">
        {['Link', 'Link', 'Link', 'Link', 'Link', 'Link'].map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-white self-stretch gap-2 px-2 my-auto hover:text-[#0072EF] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
