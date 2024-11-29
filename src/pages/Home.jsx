import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-white to-pink-200 h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Welcome to Worker Booking
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mb-6">
            Easily find and book skilled workers for your daily needs.
          </p>
          <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
