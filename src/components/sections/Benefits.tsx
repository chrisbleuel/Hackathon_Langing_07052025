
import React from 'react';
const benefits = [{
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/12b1682631ac3e7073c6bcd887144093bbd4c535?placeholderIfAbsent=true',
  text: 'Premium frame brands'
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/7d28e5f765d513962cb2890511f63a5eb7252c94?placeholderIfAbsent=true',
  text: 'Partners give one-year free warranty'
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/4af37acf63ffb23fc52f6681da37d145f4863c54?placeholderIfAbsent=true',
  text: 'Free shipping'
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/3e6b0276402adc4756038fbed613474f3db8c629?placeholderIfAbsent=true',
  text: 'Free returns'
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/0c68f783e7eaff9e50bff79b1cde7440f30f99bf?placeholderIfAbsent=true',
  text: 'Free services instore'
}, {
  icon: 'https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ac1f861dec7e7bfb8f5a0c9ac5306c1c426c5cd9?placeholderIfAbsent=true',
  text: 'Free case and cleaning cloth'
}];
export const Benefits = () => {
  return <section className="w-full py-16 ">
      <div className="content-start flex-wrap flex w-full gap-4 text-base text-[#32373E] font-normal text-center tracking-[0.08px] max-w-[1440px] mx-auto px-4">
        {benefits.map((benefit, index) => <div key={index} className="flex min-h-[130px] flex-col items-stretch grow shrink w-[143px] pt-2 pb-[38px] px-2 hover:bg-[#F2F5F8] transition-colors">
            <img src={benefit.icon} className="aspect-[1] object-contain w-12 self-center" alt={benefit.text} />
            <div className="text-[#32373E] mt-3">{benefit.text}</div>
          </div>)}
      </div>
    </section>;
};
