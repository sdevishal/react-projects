export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] dark:bg-[#111827] border-t border-gray-200 text-gray-500 dark:text-gray-300 text-center text-sm">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center gap-1">
          <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-3">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
