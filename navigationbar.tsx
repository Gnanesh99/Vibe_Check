"use client";
import React from 'react';
import { HomeIcon, CommunityIcon, ExploreIcon, ProfileIcon } from './Icons';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => (
  <button className="flex flex-col gap-1 justify-end items-center rounded-3xl flex-[1_0_0]">
    <div className="flex flex-col items-center flex-[1_0_0]">
      {icon}
    </div>
    <span className={`self-stretch text-xs leading-5 ${isActive ? 'text-white' : 'text-gray-400'}`}>
      {label}
    </span>
  </button>
);

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex gap-2 items-start self-stretch px-4 pt-2 pb-3 border-t border-solid bg-neutral-800 border-t-gray-800">
      <NavItem icon={<HomeIcon />} label="Home" isActive={true} />
      <NavItem icon={<CommunityIcon />} label="Community" />
      <NavItem icon={<ExploreIcon />} label="Explore" />
      <NavItem icon={<ProfileIcon />} label="Profile" />
    </nav>
  );
};
