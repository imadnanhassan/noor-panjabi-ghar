"use client";

export default function AdminPageFooter() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-semibold text-black dark:text-white">
              Noor Panjabi Ghar
            </span>
          </div>
          <p className="text-black/70 dark:text-white/70 text-sm">
            © 2025 Noor Panjabi Ghar Admin Panel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
