import React from "react";
import Image from "next/image";
import courses from "@/lib/courses.json";
import Link from "next/link";

export const metadata = {
  title: "SkillSphere - All Courses",
};

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        All Courses
      </h1>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                
                <div className="flex justify-between text-xs">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>

                <h2 className="text-lg font-semibold line-clamp-2">
                  {course.title}
                </h2>

                <p className="text-sm text-gray-500">
                  By {course.instructor}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between text-xs text-gray-500 pt-2">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                </div>

                <Link href={`/courses/${course.id}`}>
                  <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 col-span-full text-center">
            No courses found.
          </p>
        )}

      </div>
    </div>
  );
}