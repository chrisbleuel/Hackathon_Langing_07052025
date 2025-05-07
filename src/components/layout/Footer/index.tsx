import React from 'react';
import { LinksPanel } from './LinksPanel';
import { BottomBar } from './BottomBar';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F5F8]">
      <LinksPanel />
      <BottomBar />
    </footer>
  );
};
