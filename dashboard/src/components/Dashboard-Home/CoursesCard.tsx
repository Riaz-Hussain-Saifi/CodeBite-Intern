import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  tag: string;
  tagBg: string;
  progress: number;
  weeksLeft: string;
  progressColor: string;
  avatar: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  tag,
  tagBg,
  progress,
  weeksLeft,
  progressColor,
  avatar,
}) => {
  return (
    <Card className="shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <div
            className={`text-xs font-medium inline-block px-2 py-1 rounded mt-2`}
            style={{ backgroundColor: tagBg }}
          >
            {tag}
          </div>
        </div>

        {/* Progress Section */}
        <div className="my-4">
          <div className="text-sm font-semibold text-black">{weeksLeft} Left</div>
          <div className="relative h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="absolute top-0 left-0 h-2 rounded-full"
              style={{ width: `${progress}%`, backgroundColor: progressColor }}
            />
          </div>
          <div className="text-right text-xs font-semibold mt-1 text-black">
            {progress}% Completed
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <p className="text-xs text-gray-500 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Image
              src={avatar}
              alt="Instructor"
              width={28}
              height={28}
              className="rounded-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CoursesDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <CourseCard
        title="Web Design"
        description="Design Learn Management System"
        tag="UI / UX Design"
        tagBg="#f3f4f6"
        progress={55}
        weeksLeft="6 Weeks"
        progressColor="#f59e0b"
        avatar="/image3.png"
      />
      <CourseCard
        title="Web Development"
        description="Design Learn Management System"
        tag="Javascript"
        tagBg="#e5e7eb"
        progress={55}
        weeksLeft="6 Weeks"
        progressColor="#10b981"
        avatar="/image3.png"
      />
      <CourseCard
        title="CSS & HTML"
        description="Design Learn Management System"
        tag="UI / UX Design"
        tagBg="#f3f4f6"
        progress={55}
        weeksLeft="6 Weeks"
        progressColor="#3b82f6"
        avatar="/image3.png"
      />
    </div>
  );
};

export default CoursesDashboard
