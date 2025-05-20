"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const barData = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 38 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 65 },
  { day: "Fri", value: 80, inactive: true },
  { day: "Sat", value: 52, inactive: true },
  { day: "Sun", value: 40, inactive: true },
];

const StatisticsProgressCharts = () => {
  const [progressView, setProgressView] = useState("monthly");
  const currentProgress = 67;
  const reward = 10;

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full mt-6">
      {/* Statistics Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow w-full lg:w-2/3">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h2>
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-lime-100 text-lime-600 font-medium">
            Hours spent
          </span>
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium">
            Daily Goal
          </span>
        </div>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                fill="#4ade80"
                isAnimationActive
              >
                <LabelList
                  dataKey="value"
                  content={({ x, y, value }) =>
                    value >= 80 ? (
                      <text
                        x={x + 10}
                        y={y - 10}
                        fontSize={14}
                        fill="#1e40af"
                        fontWeight="bold"
                      >
                        💎
                      </text>
                    ) : null
                  }
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Circular Progress Chart */}
      <div className="bg-white p-6 rounded-xl shadow w-full lg:w-1/3 flex flex-col items-center justify-between">
        <div className="flex justify-between w-full mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Today's Progress</h2>
          <Tabs defaultValue={progressView} onValueChange={setProgressView}>
            <TabsList className="bg-gray-100 p-1 rounded-md">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="w-32 h-32 my-4">
          <CircularProgressbar
            value={currentProgress}
            maxValue={100}
            text={`${currentProgress}%`}
            styles={buildStyles({
              textSize: "18px",
              pathColor: "#22c55e",
              textColor: "#111827",
              trailColor: "#e5e7eb",
            })}
          />
        </div>

        <p className="text-sm text-gray-700 text-center">
          Finish today's program <br /> and get
        </p>
        <p className="text-2xl mt-2 text-blue-600 font-semibold">💎 {reward}</p>
      </div>
    </div>
  );
};

export default StatisticsProgressCharts