

import courses from "@/lib/courses.json";

export  function getCourseById(id) {
  console.log(id)

  // return courses.find((item) => item.id === parseInt(id));
    return courses.find((item) => String(item.id) === String(id));
}