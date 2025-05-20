import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RightSide = () => {
  return (
    <div className="p-4 w-full max-w-md mx-auto lg:max-w-xs">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        {/* Search */}
        <div className="relative w-full max-w-[200px]">
          <input
            type="text"
            placeholder="Search anything"
            className="w-full h-10 rounded-md px-8 py-5 text-sm bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Notification + Avatar */}
        <div className="flex items-center mx-2 space-x-2">
          <Button className="p-1 rounded-full hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </Button>
          <Image
            src="/image.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full border-2 border-white shadow-sm"
          />
        </div>
      </div>

      {/* Streak Section */}
      <Card className="mb-4 shadow-sm">
        <CardContent className="p-4 text-center">
          <div className="text-orange-500 font-bold text-lg">
            🔥 1234 day streak
          </div>
          <p className="text-sm text-gray-500 mb-3">You're on fire!</p>
          <div className="grid grid-cols-7 gap-2 text-xs text-gray-500 mb-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 mx-auto bg-orange-500 rounded-full flex items-center justify-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
            {[28, 29, 30].map((day, i) => (
              <div
                key={i}
                className="w-6 h-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs"
              >
                {day}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Remaining Tasks */}
      <h3 className="font-bold mt-6 mb-2">Remining task</h3>

      <Card className="mb-4 shadow-sm animate-in fade-in zoom-in-50 duration-500 ease-in-out">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g mask="url(#mask0_2_89)">
                  <path
                    d="M10.9301 13.02V15.88H6.65002V13.02M3.93994 13.02H13.64C14.43 13.02 14.83 13.02 15.14 12.87C15.41 12.73 15.62 12.51 15.76 12.25C15.92 11.94 15.92 11.54 15.92 10.74V5.32999C15.92 4.52999 15.92 4.13001 15.76 3.82001C15.62 3.56001 15.41 3.34001 15.14 3.20001C14.83 3.05001 14.43 3.04999 13.64 3.04999H3.93994C3.13994 3.04999 2.74994 3.05001 2.43994 3.20001C2.16994 3.34001 1.94995 3.56001 1.81995 3.82001C1.65995 4.13001 1.66003 4.52999 1.66003 5.32999V10.74C1.66003 11.54 1.65995 11.94 1.81995 12.25C1.94995 12.51 2.16994 12.73 2.43994 12.87C2.74994 13.02 3.13994 13.02 3.93994 13.02Z"
                    stroke="#027A48"
                    stroke-width="1.42544"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-green-700">
                Web Design
              </span>
              <Progress
                value={55}
                className="h-2 bg-green-100 mt-1"
                indicatorClassName="bg-green-500"
              />
            </div>
          </div>
          <span className="text-sm font-semibold text-green-600">55%</span>
        </CardContent>
      </Card>

      {/* To Do List */}
      <div className="p-4">
        <h3 className="font-bold mb-4">To Do List</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Checkbox
              id="task-1"
              className="mt-1 bg-white border border-black"
            />
            <div className="ml-1">
              <Label
                htmlFor="task-1"
                className="font-medium block cursor-pointer"
              >
                Developing Restaurant Apps
              </Label>
              <div className="flex items-center mt-1">
                <span className="text-xs text-purple-600 font-medium mr-3">
                  Programming
                </span>
                <span className="text-xs text-gray-500">08:00 AM</span>
              </div>
            </div>
          </div>
          <div className="flex items-start ml-6">
            <Checkbox
              id="task-2"
              className="mt-1 bg-white border border-black"
            />
            <div className="ml-3">
              <Label
                htmlFor="task-2"
                className="font-medium block cursor-pointer"
              >
                Integrate API
              </Label>
            </div>
          </div>
          <div className="flex items-start ml-6">
            <Checkbox
              id="task-3"
              checked
              className="mt-1 bg-white border border-black"
            />
            <div className="ml-3">
              <Label
                htmlFor="task-3"
                className="font-medium block cursor-pointer line-through"
              >
                Report Analysis P2P Business
              </Label>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-600 font-medium mr-3">
                  Business
                </span>
                <span className="text-xs text-orange-500">04:50 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide
