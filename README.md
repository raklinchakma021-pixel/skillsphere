

## 🧾 1. Project Title

* Include the project name at the top:

  ```
  🎓 SkillSphere – Online Learning Platform
  ```

---

## 🎯 2. Project Purpose

Write a short description explaining:

* What SkillSphere is
* Its main goal
* What users can do on the platform

**Example points to include:**

* Online learning platform for skill-based courses
* Users can browse, view, and enroll in courses
* Authentication-based access system

---

## 🌐 3. Live Project Link

Provide your deployed project URL:

```
🔗 Live Site: https://skillsphere-kohl.vercel.app/
```

---

## 📂 4. GitHub Repository Link

```
🔗 GitHub Repo: https://github.com/raklinchakma021-pixel/skillsphere
```

---

## ✨ 5. Key Features

List all important features clearly:

* 🔐 User Authentication (Login/Register with BetterAuth + Google Login)
* 📚 Course browsing system (All Courses page)
* 🎥 Course details page (protected route)
* 🔎 Search functionality (search courses by title)
* 👤 My Profile page with update feature
* 📱 Fully responsive design (mobile, tablet, desktop)
* 🔒 Protected routes for authenticated users
* ⚡ Dynamic routing using Next.js App Router
* 🧾 Toast notifications for success/error messages
* ⏳ Loading states for data fetching
* 🚫 Custom Not Found (404) page
* 🎨 Unique UI design using Tailwind + DaisyUI/HeroUI
* 🎬 Extra section: Trending Courses / New Releases
* 🧑‍🏫 Top Instructors section
* 📊 Popular Courses section

---

## 🧩 6. Technologies Used

Clearly mention your tech stack:

* Next.js (App Router)
* Tailwind CSS
* DaisyUI / HeroUI
* BetterAuth
* React Hook Form (if used)
*  / Motion /
* Toast library (e.g., react-toastify / sonner)

---

## 📦 7. NPM Packages Used

List all installed packages:

```txt
next
tailwindcss
daisyui
better-auth
react-toastify
framer-motion / react-spring / animate.css (choose one)
```

---


## 🔐 9. Authentication Info

Explain briefly:

* Login/Register system
* Google authentication support
* Protected routes (Course Details, Profile)
* Redirect behavior after login/logout

---

## 📊 10. Course Data Structure

Include sample JSON format:

```json
{
  "id": 1,
  "title": "Complete Web Development Bootcamp",
  "instructor": "John Doe",
  "duration": "20 hours",
  "rating": 4.8,
  "level": "Beginner",
  "description": "Learn full-stack web development from scratch.",
  "image": "https://i.postimg.cc/example-course1.png",
  "category": "Development"
}

---

## 🌍 12. Environment Variables

Explain required `.env` setup:

```env
MONGO_URL=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## 🚀 13. Deployment

Mention hosting platform:

* Vercel / Render

```
Deployed on: Vercel
```

---

## ⚠️ 14. Important Notes

* App must not break on refresh (Next.js routing handled properly)
* All routes should be responsive and error-free
* Toasts must be used for feedback messages
* Protected routes must redirect properly
* No email verification or password recovery required

---

## 🏆 15. Bonus Features (Optional but Recommended)

* Search functionality
* Trending/New Releases section
* Profile update system
* Animation library integration