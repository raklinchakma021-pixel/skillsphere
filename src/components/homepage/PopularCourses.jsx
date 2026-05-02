import Link from "next/link";
import Image from "next/image";
import coursesData from "@/lib/courses.json";

export default function PopularCourses() {
  // Sort by rating (highest first) and take top 3
  const topCourses = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          🔥 Popular Courses
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {topCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
  src={course.image}
  alt={course.title}
  width={400}
  height={250}
  className="object-cover"
/>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-2">
                  👨‍🏫 {course.instructor}
                </p>

                <p className="text-yellow-500 font-medium mb-4">
                  ⭐ {course.rating}
                </p>

                <Link
                  href={`/courses/${course.id}`}
                  className="inline-block w-full text-center bg-indigo-600 text-black py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}