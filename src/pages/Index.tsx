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
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {!isMobile ? <>
            <Hero />
            <Benefits />
            <div className="w-full px-4 py-8">
              <QuizTeaser />
              <BannerTeaser />
              <ProductTeaser />
            </div>
          </> : <>
            <div className="w-full">
              <Hero />
              
              <Benefits />
              <div className="w-full px-4 py-8">
                <QuizTeaser />
                <BannerTeaser />
                <ProductTeaser />
              </div>
            </div>
          </>}
      </main>
      <Footer />
    </div>;
};
export default Index;