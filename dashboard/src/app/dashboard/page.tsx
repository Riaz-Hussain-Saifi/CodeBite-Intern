import React from 'react'
import LeftSide from '@/components/Left-Side';
import RightSide from '@/components/Right-Side';
import DashboardHome from '@/components/Dashboard-Home/Home';

function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col lg:flex-row">

      {/* Left Side bar */}
      <div className="w-full lg:w-64 xl:w-72 h-auto lg:h-screen border-r border-gray-100 bg-gray-300">
        {/* Content for left sidebar */}
        <LeftSide />
      </div>

      {/* Main content */}
      <div className="flex-1 min-h-screen bg-white px-4 lg:px-8">
        {/* Main content goes here */}
        <DashboardHome />
      </div>

      {/* Right side bar */}
      <div className="w-full lg:w-64 xl:w-72 h-auto lg:h-screen border-l border-gray-100 bg-gray-300">
        {/* Content for right sidebar */}
        <RightSide />
      </div>
    </div>
  );
}

export default Dashboard
