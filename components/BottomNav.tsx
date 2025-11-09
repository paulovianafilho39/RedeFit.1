
import React from 'react';
import { Page, User } from '../types';
import { HomeIcon } from './icons/HomeIcon';
import { SearchIcon } from './icons/SearchIcon';
import { PlusCircleIcon } from './icons/PlusCircleIcon';
import { StoreIcon } from './icons/StoreIcon';

interface BottomNavProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  onNewPost: () => void;
  currentUser: User;
}

const NavItem: React.FC<{ onClick: () => void; isActive: boolean; children: React.ReactNode; }> = ({ onClick, isActive, children }) => (
    <button onClick={onClick} className={`transition-transform duration-200 ease-in-out ${isActive ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-white'}`}>
        {children}
    </button>
);


const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate, onNewPost, currentUser }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 h-16 flex items-center justify-around z-10">
      <NavItem onClick={() => onNavigate(Page.Feed)} isActive={activePage === Page.Feed}>
        <HomeIcon className="w-7 h-7" />
      </NavItem>
      <NavItem onClick={() => onNavigate(Page.Explore)} isActive={activePage === Page.Explore}>
        <SearchIcon className="w-7 h-7" />
      </NavItem>
      <button onClick={onNewPost} className="text-red-500 hover:text-red-400 transition-transform transform hover:scale-110">
        <PlusCircleIcon className="w-10 h-10" />
      </button>
      <NavItem onClick={() => onNavigate(Page.Marketplace)} isActive={activePage === Page.Marketplace}>
        <StoreIcon className="w-7 h-7" />
      </NavItem>
      <NavItem onClick={() => onNavigate(Page.Profile)} isActive={activePage === Page.Profile}>
        <img src={currentUser.profilePicture} alt="Profile" className={`w-8 h-8 rounded-full border-2 ${activePage === Page.Profile ? 'border-red-500' : 'border-gray-600'}`} />
      </NavItem>
    </nav>
  );
};

export default BottomNav;
