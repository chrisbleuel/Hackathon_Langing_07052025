
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { QuizTeaser } from '@/components/sections/teasers/QuizTeaser';
import { BannerTeaser } from '@/components/sections/teasers/BannerTeaser';
import { ProductTeaser } from '@/components/sections/teasers/ProductTeaser';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {!isMobile ? (
          <>
            <Hero />
            <Benefits />
            <div className="w-full px-4 py-8">
              <QuizTeaser />
              <BannerTeaser />
              <ProductTeaser />
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <Hero />
              <div className="px-4 py-6">
                <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
                <p className="text-base mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.</p>
                <button className="bg-[#0072EF] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Call to Action
                </button>
              </div>
              <Benefits />
              <div className="w-full px-4 py-8">
                <QuizTeaser />
                <BannerTeaser />
                <ProductTeaser />
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
