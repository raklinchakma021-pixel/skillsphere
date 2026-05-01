import courses from "@/lib/data.json";

export default function CourseDetails({ params }) {
    console.log(params)
  const id = parseInt(params.id); // 🔥 important

  const course = courses.find((item) => item.id === id);

  if (!course) {
    return <h1 className="p-10 text-red-500">Course Not Found</h1>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img src={course.image} alt={course.title} className="mb-5" />

      <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
      <p className="mb-2">Instructor: {course.instructor}</p>
      <p className="mb-2">Duration: {course.duration}</p>
      <p className="mb-2">Level: {course.level}</p>
      <p className="mb-4">{course.description}</p>

      {/* 🔥 Static Curriculum */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Course Curriculum
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction & Setup</li>
          <li>HTML & CSS Basics</li>
          <li>JavaScript Fundamentals</li>
          <li>React Basics</li>
          <li>Project Building</li>
          <li>Deployment</li>
        </ul>
      </div>
    </div>
  );
}