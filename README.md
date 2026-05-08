# 🚀 SpaceX Mission Dashboard

A modern web application that displays SpaceX launches, provides filtering and search capabilities, and visualizes launch data over time.

---

## ✨ Features

- 📋 Mission Directory (List of SpaceX launches)
- 🔍 Search launches by name
- 🎯 Filter launches (All, Upcoming, Past, Successful, Failed)
- 📊 Data visualization (Launches per Year chart)
- 📄 Launch Details page
- ⚠️ Error handling & loading states
- ❌ Not Found & Empty states
- 📱 Fully responsive design

---

## 🚀 Technologies Used

This project was built using modern frontend technologies to ensure scalability, performance, and a clean user experience.

### 🧩 Core

- **React (with TypeScript)** – Component-based architecture with strong typing for better maintainability.
- **Vite** – Fast development environment and optimized build performance.

### 🎨 UI & Styling

- **Tailwind CSS** – Utility-first CSS framework for rapid and responsive design.
- **shadcn/ui** – Reusable and accessible UI components built on top of Radix UI.
- **Lucide Icons** – Clean and modern icon set.

### 📊 Data Visualization

- **Recharts** – Used to build responsive and interactive charts (Launches per Year).

### 🔄 State Management

- **Zustand** – Lightweight global state management for filters, search, and pagination
- I use it in task because asked it in interview by interviewer

### 🌐 Data Fetching

- **Axios** – API requests handling.
- **TanStack Query (React Query)** – Efficient data fetching, caching, and synchronization.

### 🧠 Architecture

- **Custom Hooks** – Separation of logic from UI (e.g., useFilteredLaunches).
- **Service Layer** – API logic separated from components.
- **Utility Functions** – Reusable logic (filtering, formatting, chart processing).

### 📱 UX Enhancements

- Responsive design for all screen sizes
- Loading states (Skeleton UI)
- Error handling UI
- Empty & Not Found states
- Scroll hints for mobile charts

---

## 🔗 API Used

- https://api.spacexdata.com/v4/launches

---

## 🌍 Live Demo

- https://spacex-orpin-phi.vercel.app/

---

## 🛠️ Getting Started

```bash
npm install
npm run dev
```
