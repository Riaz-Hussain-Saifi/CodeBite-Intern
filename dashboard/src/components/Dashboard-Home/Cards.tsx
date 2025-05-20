import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Highest Streak",
    value: 25,
    percentage: "+2.6%",
    trendColor: "text-green-600",
    description: "than last week",
    icon: "/card1.png",
    stroke: "#FEC53D",
    bg: "bg-yellow-200 w-8 h-8 rounded-full"
  },
  {
    title: "Projects Completed",
    value: 25,
    percentage: "-2.6%",
    trendColor: "text-pink-600",
    description: "than last week",
    icon: "/card2.png",
    stroke: "#FF72B6",
    bg: "bg-pink-200 w-8 h-8 rounded-full"
  },
  {
    title: "Total Points",
    value: 25,
    percentage: "+2.6%",
    trendColor: "text-blue-600",
    description: "than last week",
    icon: "/card3.png",
    stroke: "#47C9FF",
    bg: "bg-blue-200 w-8 h-8 rounded-full"
  },
  {
    title: "Highest Streak",
    value: 25,
    percentage: "+2.6%",
    trendColor: "text-green-600",
    description: "than last week",
    icon: "/card1.png",
    stroke: "#FEC53D",
    bg: "bg-yellow-200 w-8 h-8 rounded-full"
  }
];

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="w-full h-24 shadow-md rounded-xl p-4 bg-white flex flex-col justify-between"
        >
          <CardContent className="flex flex-col justify-between h-full p-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  {stat.title}
                </h3>
                <div className="flex items-center mt-1">
                  <span className="text-xl font-bold text-black mr-2">
                    {stat.value}
                  </span>
                  <svg
                    width="26"
                    height="9"
                    viewBox="0 0 26 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.35001L4.388 4.58L5.79999 7L13.424 2V6.35001L17.659 4.58L20.765 6.35001L25 5.23"
                      stroke={stat.stroke}
                      strokeWidth="2"
                    />
                  </svg>
                  <span className={`text-xs ml-2 ${stat.trendColor}`}>
                    {stat.percentage}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">
                    {stat.description}
                  </span>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full ${stat.bg} flex items-center justify-center`}>
                <Image src={stat.icon} alt="icon" width={24} height={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsSection
