export default function TrendingCourses() {
  const courses = [
    {
      title: "Next.js 15 Mastery",
      tag: "Trending",
      level: "Intermediate",
      desc: "Build full-stack apps with App Router, Server Actions & more.",
    },
    {
      title: "Tailwind UI Design System",
      tag: "New",
      level: "Beginner",
      desc: "Create modern UI components using Tailwind best practices.",
    },
    {
      title: "Fullstack Next.js SaaS",
      tag: "Hot",
      level: "Advanced",
      desc: "Stripe, authentication, database & deployment in one course.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-10 bg-gray-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1180 75L1179 -124' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1436 421L1435 675' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M730 435L729 120' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M312 464L311 239' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M122 234L121 -157' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1326 244L1325 -12' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M371 496L370 889' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1180 62L1179 468' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1218 132L1217 -79' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1047 300L1046 -32' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M435 485L434 117' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M507 458L506 663' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M226 434L225 38' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1158 59L1157 -282' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M890 367L889 784' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M457 247L456 654' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M786 411L785 610' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M194 86L193 -241' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M173 377L172 584' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M828 280L827 43' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1315 218L1314 461' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M591 380L590 178' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M988 257L987 69' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M863 273L862 493' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1320 141L1319 408' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M392 397L391 643' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M103 159L102 -218' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M596 473L595 200' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M411 409L410 16' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M692 488L691 121' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M722 191L721 -153' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M365 321L364 128' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1099 530L1098 864' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M181 462L180 755' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M769 409L768 732' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1071 337L1070 181' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1001'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1002'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
          backgroundSize: "cover",
        }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Trending Courses 🚀
          </h2>
          <a
            href="/courses"
            className="text-sm font-medium text-gray-300 hover:underline"
          >
            View all
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 border border-gray-100"
            >
              {/* Badge */}
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 mb-3">
                {course.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {course.title}
              </h3>

              {/* Level */}
              <p className="text-xs text-gray-500 mb-2">{course.level}</p>

              {/* Description */}
              <p className="text-sm text-gray-600">{course.desc}</p>

              {/* Button */}
              <button className="mt-4 w-full py-2 rounded-xl bg-gray-900 text-white text-sm hover:bg-gray-800 transition">
                Explore Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}