import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleFavorite = (userId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId]
    );
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Set titles for routes without a page-specific title effect.
  // Users and UserDetails manage their own titles in their own useEffect hooks.
  useEffect(() => {
    if (location.pathname === "/") document.title = "Home | Team Directory";
    else if (location.pathname === "/about") document.title = "About | Team Directory";
    else if (location.pathname !== "/users" && !location.pathname.startsWith("/users/")) {
      document.title = "Page Not Found | Team Directory";
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((current) => !current)}
      />
      <main className="mx-auto min-h-[calc(100vh-150px)] max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Team Directory · React, React Router, and Tailwind CSS
      </footer>
    </div>
  );
}