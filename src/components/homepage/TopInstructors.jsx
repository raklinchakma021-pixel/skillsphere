import Image from "next/image";

export default function TopInstructors() {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      students: 1200,
    },
    {
      id: 2,
      name: "Sarah Khan",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      students: 980,
    },
    {
      id: 3,
      name: "Alex Smith",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      students: 1500,
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      students: 1100,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">
          👨‍🏫 Top Instructors
        </h2>

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