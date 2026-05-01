import Image from "next/image";

export default function TopInstructors() {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      role: "Full Stack Developer",
      image: "/instructors/john.jpg",
      students: 1200,
    },
    {
      id: 2,
      name: "Sarah Khan",
      role: "UI/UX Designer",
      image: "/instructors/sarah.jpg",
      students: 980,
    },
    {
      id: 3,
      name: "Alex Smith",
      role: "Backend Engineer",
      image: "/instructors/alex.jpg",
      students: 1500,
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Digital Marketer",
      image: "/instructors/emma.jpg",
      students: 1100,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          👨‍🏫 Top Instructors
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-5 text-center"
            >
              {/* Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold">
                {instructor.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {instructor.role}
              </p>

              <p className="text-indigo-600 font-medium mt-2">
                👥 {instructor.students} Students
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}