# Practical 2: State Management and Routing in React

**Student Name:** Ghoniya Dhyey  
**Student ID:** 24CS024  
**Subject:** ITUE301 - AWDF (Advanced Web Development Frameworks)  
**Academic Year:** 2025-26  
**Institution:** Charotar University of Science and Technology (CHARUSAT), CSPIT  

---

## 🎯 Aim
To implement reactive state management using `useState` and multi-page client-side navigation using React Router (`BrowserRouter`, `Routes`, `Route`, `NavLink`, and 404 wildcard route).

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Routing:** `react-router-dom` v6
- **State Management:** Reactive Hooks (`useState`)

## 📂 Project Structure
```
Practical_2/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Persistent responsive navigation bar
│   │   ├── Home.jsx         # Landing page with architectural overview
│   │   ├── TaskManager.jsx  # Interactive task CRUD with useState
│   │   ├── Contact.jsx      # Controlled contact form
│   │   └── NotFound.jsx     # Wildcard 404 error page
│   ├── App.jsx              # Main routes configuration
│   ├── App.css              # Dark theme styling
│   ├── index.css            # Global resets
│   └── main.jsx             # BrowserRouter wrapper
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started
```bash
npm install
npm run dev
```
