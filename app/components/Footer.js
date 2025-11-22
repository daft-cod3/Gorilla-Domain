export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 dark:text-white p-6 text-center text-xs sm:text-sm">
      <p>
        This platform is for study purposes only. Not affiliated with NTSA.
      </p>
      <p className="text-sm text-gray-400 p-3">
        &copy; {new Date().getFullYear()} GorillaDomain. All rights reserved.
      </p>
    </footer>
  );
}
