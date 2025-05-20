"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  title: string;
  src: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, src, isActive, onClick }) => {
  return (
    <Link
      href="#"
      onClick={onClick}
      className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
        isActive
          ? "bg-green-50 text-green-600 font-medium"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <div className={`mr-3 ${isActive ? "text-green-500" : "text-gray-400"}`}>
        <Image src={src} alt={title} width={20} height={20} className="h-5 w-5" />
      </div>
      {title}
    </Link>
  );
};

function LeftSide() {
  const [activeItem, setActiveItem] = useState('HOME');

  const navItems = [
    { title: 'HOME', src: '/dashboard/home.jpg' },
    { title: 'MY COURSES', src: '/dashboard/my-courses.png' },
    { title: 'PROJECTS', src: '/dashboard/projects.png' },
    { title: 'EXERCISES', src: '/dashboard/exercises.png' },
    { title: 'PROGRAMMING LABS', src: '/dashboard/programing-labs.png' },
    { title: 'SCHEDULE', src: '/dashboard/schedule.png' },
    { title: 'COMMUNITY', src: '/dashboard/community.png' },
    { title: 'COLLAB', src: '/dashboard/collab.jpg' }
  ];

  return (
    <div className="w-full h-full bg-white border-r border-gray-200">
      <div className="flex flex-col h-full py-6 px-4">
        <div className="mb-8">
          <div className="text-blue-500 text-2xl font-bold mb-8 px-4">codebite</div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                src={item.src}
                isActive={activeItem === item.title}
                onClick={() => setActiveItem(item.title)}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
