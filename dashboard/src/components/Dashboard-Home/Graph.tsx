"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-calendar-heatmap/dist/styles.css";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dynamically import react-calendar-heatmap (Next.js 15 compatible)
const CalendarHeatmap = dynamic(() => import("react-calendar-heatmap"), {
  ssr: false,
});

const today = new Date();
const yearAgo = new Date(today);
yearAgo.setFullYear(today.getFullYear() - 1);

// Generate dummy data
const generateValues = () => {
  const days = 365;
  const values = [];
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    values.push({ date: date.toISOString().split("T")[0], count: Math.floor(Math.random() * 5) });
  }
  return values;
};

const ActivityGraph = () => {
  const [view, setView] = useState("monthly");
  const [data] = useState(generateValues);

  return (
    <div className="w-full flex flex-col gap-4 my-8">
      {/* Title & Tabs */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="text-xl font-semibold text-gray-800">Activity Graph</h2>
        <Tabs defaultValue={view} onValueChange={setView}>
          <TabsList className="bg-gray-100 rounded p-1">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Graph */}
      <div className="bg-white rounded-xl border p-4 shadow-sm overflow-x-auto">
        <CalendarHeatmap
          startDate={yearAgo}
          endDate={today}
          values={data}
          classForValue={(value: any) => {
            if (!value) return "color-empty";
            return `color-github-${value.count}`;
          }}
          showWeekdayLabels
          weekdayLabels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          monthLabels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
          titleForValue={(value: any) => (value ? `${value.date}: ${value.count} activities` : "No activities")}
        />

        {/* Legend */}
        <div className="flex justify-end items-center gap-1 text-xs mt-4 text-gray-500">
          <span>Less</span>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded color-github-${i}`}></div>
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityGraph