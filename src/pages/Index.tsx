import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { QuizTeaser } from '@/components/sections/teasers/QuizTeaser';
import { BannerTeaser } from '@/components/sections/teasers/BannerTeaser';
import { ProductTeaser } from '@/components/sections/teasers/ProductTeaser';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <div className="w-full px-4 py-8">
          <QuizTeaser />
          <BannerTeaser />
          <ProductTeaser />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
