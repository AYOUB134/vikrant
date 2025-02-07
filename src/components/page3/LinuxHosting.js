"use client";

const LinuxHosting = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Linux Shared Web Hosting with cPanel</h1>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-red-500 text-xl font-bold">✔</span>
            <p className="font-medium text-lg">24x7 Support</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 text-xl font-bold">✔</span>
            <p className="font-medium text-lg">99.9% Uptime</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 text-xl font-bold">✔</span>
            <p className="font-medium text-lg">1-Click Installer</p>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">
          Get Started Now
        </button>
        <p className="mt-4 text-gray-300 text-sm">
          Proudly Trusted By Over <span className="font-semibold">750,000+ Websites</span>
        </p>
      </div>
    </div>
  );
};

export default LinuxHosting;
