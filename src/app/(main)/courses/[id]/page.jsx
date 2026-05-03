import courses from "@/lib/courses.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const courseId = Number(id);

  const course = courses.find((c) => c.id === courseId);

  if (!course) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        <h1 className="text-3xl text-white font-bold">{course.title}</h1>

        <p className="text-gray-400">{course.description}</p>

        {/* Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mt-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold">Instructor</span>
            <p>{course.instructor}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold">Duration</span>
            <p>{course.duration}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold">Level</span>
            <p>{course.level}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold">Category</span>
            <p>{course.category}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold">Rating</span>
            <p>⭐ {course.rating}</p>
          </div>
        </div>

        {/* Back button */}
        <Link href="/courses">
          <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            ← Back to Courses
          </button>
        </Link>
      </div>
    </main>
  );
}