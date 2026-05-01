export default function LearningTips() {
  const tips = [
    {
      title: "📚 Study Techniques",
      points: [
        "Use active recall instead of just reading",
        "Practice with real projects",
        "Break topics into small chunks",
        "Teach what you learn to others"
      ]
    },
    {
      title: "⏱ Time Management Tips",
      points: [
        "Follow Pomodoro technique (25-5 rule)",
        "Set daily learning goals",
        "Avoid multitasking",
        "Track your progress weekly"
      ]
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          📌 Learning Tips
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((section, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {section.title}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}