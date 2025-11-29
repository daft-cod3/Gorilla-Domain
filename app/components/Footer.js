"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white dark:bg-black dark:text-white p-10 text-center text-xs sm:text-sm">
      <p>
        This platform is for study purposes only. Not affiliated with NTSA.
      </p>
      <p className="text-sm text-gray-400 p-3">
        &copy; {year} GorillaDomain. All rights reserved.
      </p>
    </footer>
  );
}
