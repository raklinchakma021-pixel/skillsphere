
"use client"
import Link from "next/link";
import courses from "@/lib/courses.json";
import { useState } from "react";

export default function CourseHomePage() {

 const [query, setQuery] = useState("");

  const filteredCourses = query.trim()
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(query.toLowerCase().trim())
      )
    : courses;

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">All Courses</h1>

        {/* 🔍 Search Input */}
        <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-white text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button> */}
      </div>


      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.length > 0 ? (courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {course.instructor}
              </p>

              <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
                <span>⭐ {course.rating}</span>
                <span>{course.level}</span>
              </div>

              <Link href={`/courses/${course.id}`}>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))  ) : (
          <p className="text-gray-500 col-span-full">
            No courses found.
          </p>
        )
      
      }
      </div>
    </main>
  );
}