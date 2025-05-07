import React from 'react';
export const TopBar = () => {
  return <div className="justify-center items-center flex min-h-[28px] w-full gap-20 overflow-hidden text-xs text-white tracking-[0.08px] bg-[#32373E] pt-0 pb-0">
      <div className="self-stretch flex min-w-60 w-full max-w-[1440px] items-center gap-[40px_32px] flex-wrap flex-1 shrink basis-[0%] my-auto">
        <div className="text-white font-nomal self-stretch flex-1 shrink basis-[0%] my-auto px-0">
          Website Name
        </div>
        <div className="self-stretch flex min-w-60 gap-6 font-normal text-right my-auto">
          <div className="items-center flex gap-2 py-1 px-2">
            <div className="text-white self-stretch gap-2 my-auto">
              Secondary Utility
            </div>
          </div>
          <div className="items-center flex gap-2 py-1 px-2">
            <div className="text-white self-stretch gap-2 my-auto">
              Secondary Utility
            </div>
          </div>
        </div>
      </div>
    </div>;
};