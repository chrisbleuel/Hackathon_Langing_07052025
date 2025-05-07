import React from 'react';

const columns = [
  {
    headline: 'Headline',
    links: ['Link', 'Link', 'Link', 'Link']
  },
  {
    headline: 'Headline',
    links: ['Link', 'Link', 'Link', 'Link']
  },
  {
    headline: 'Headline',
    links: ['Link', 'Link', 'Link', 'Link']
  },
  {
    headline: 'Headline',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a augue augue.',
    links: ['Link']
  }
];

export const LinksPanel = () => {
  return (
    <div className="items-center flex w-full text-base tracking-[0.08px] bg-[#F2F5F8] py-10 px-4">
      <div className="self-stretch flex min-w-60 w-full gap-6 flex-wrap flex-1 max-w-[1440px] mx-auto">
        {columns.map((column, index) => (
          <div
            key={index}
            className="max-w-[600px] min-w-60 text-[#32373E] flex-1 shrink basis-[0%] gap-8"
          >
            <h3 className="text-[#32373E] font-bold">{column.headline}</h3>
            <div className="w-full font-light gap-4 mt-8">
              {column.content && (
                <p className="text-[#606A76] w-full leading-6 gap-4 mb-4">
                  {column.content}
                </p>
              )}
              <div className="w-full gap-4">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-[#32373E] block w-full gap-2 mt-4 first:mt-0 hover:text-[#0072EF] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
