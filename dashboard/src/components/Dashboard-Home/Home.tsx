import React from "react";
import CardsSection from "./Cards";
import Image from "next/image";
import OutGoingCourse from "./OutGoingCourse";
import CoursesDashboard from "./CoursesCard";
import ActivityGraph from "./Graph";
import StatisticsProgressCharts from "./StatictsProgressChart";

const weeklyCompletion = 75;

function DashboardHome() {
  return (
    <div className="flex-1 h-screen overflow-y-auto px-4 lg:px-6 bg-white">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/Logo.png"
            alt="CodeBite Mascot"
            width={80}
            height={80}
            className="mr-4"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Welcome back Lisa!</h1>
            <p className="text-gray-600">
              You have completed{" "}
              <span className="text-blue-500 font-medium">
                {weeklyCompletion}% of your goal this week!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Components */}
      <CardsSection />
      <OutGoingCourse />
      <StatisticsProgressCharts />
      <ActivityGraph />
      <CoursesDashboard />
    </div>
  );
}

export default DashboardHome
