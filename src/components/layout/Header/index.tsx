import React from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export const Header = () => {
  return (
    <header className="w-full">
      <TopBar />
      <MainNav />
    </header>
  );
};
