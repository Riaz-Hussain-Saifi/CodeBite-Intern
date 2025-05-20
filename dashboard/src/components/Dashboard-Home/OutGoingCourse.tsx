import React from 'react';
import Image from 'next/image'

interface CourseProgressItemProps {
  title: string;
  instructor: string;
  progress: number;
  duration: string;
  completion: string;
  likes: number;
  comments: number;
  views: number;
}

const Progress = ({ value }: { value: number }) => (
  <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
    <div
      className="bg-green-500 h-full transition-all duration-500"
      style={{ width: `${value}%` }}
    />
  </div>
);

const CourseProgressItem: React.FC<CourseProgressItemProps> = ({
  title,
  instructor,
  progress,
  duration,
  completion,
  likes,
  comments,
  views,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 mb-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">By {instructor}</p>
        </div>

        <div className="text-sm text-gray-500 w-36">
          <div className="font-medium">Duration</div>
          <div className="text-black">{duration}</div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1 text-gray-600">
            <span className="font-medium">{progress}%</span>
            <span className="font-medium text-black">{completion}</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center text-blue-500 text-sm">
            <Image src="/book.png" alt="book" width={4} height={4} className="w-4 h-4 mr-1" /> {likes > 999 ? `${(likes / 1000).toFixed(0)}K+` : likes}
          </div>
          <div className="flex items-center text-black text-sm">
          <Image src="/people.png" alt="people" width={4} height={4} className="w-4 h-4 mr-1" /> {comments}
          </div>
          <div className="flex items-center text-black text-sm">
          <Image src="/play.png" alt="play" width={4} height={4} className="w-4 h-4 mr-1" /> {views}
          </div>
        </div>
      </div>
    </div>
  );
};

const OutGoingCourse: React.FC = () => {
  const courses = [
    {
      title: 'Android Developer',
      instructor: 'Instructor Name',
      duration: '24 hrs 13 mins',
      progress: 48,
      completion: '5/8',
      likes: 1000,
      comments: 16,
      views: 50,
    },
    {
      title: 'Flutter Developer',
      instructor: 'Instructor Name',
      duration: '24 hrs 13 mins',
      progress: 48,
      completion: '5/8',
      likes: 1000,
      comments: 16,
      views: 50,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Ongoing Courses</h2>
      {courses.map((course, index) => (
        <CourseProgressItem key={index} {...course} />
      ))}
    </div>
  );
};

export default OutGoingCourse
