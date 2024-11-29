import React, { useState, useEffect } from "react";
import El from "../assets/Electrician.jpeg";
import Pl from "../assets/Plumber.jpeg";
import Ca from "../assets/Carpenter.jpeg";

const Home = () => {
  const [isInView, setIsInView] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setIsInView((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".worker-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-white to-pink-200 min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center flex-col px-4 sm:px-8 my-5">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to Worker Booking
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-6">
            Easily find and book skilled workers for your daily needs.
          </p>
          <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700 text-sm sm:text-base">
            Get Started
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={`worker-card p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-opacity duration-700 ${
              isInView[0] ? "animate-slide-in-left" : "opacity-0"
            }`}
            data-index="0"
            style={{ animationDelay: isInView[0] ? "0ms" : "0ms" }}
          >
            <img
              src={El}
              alt="Electrician"
              className="w-full h-40 sm:h-48 rounded-lg mb-4"
            />
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Experienced in electrical installations and repairs.
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Electrician</p>
          </div>
          <div
            className={`worker-card p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-opacity duration-700 ${
              isInView[1] ? "animate-slide-in-left" : "opacity-0"
            }`}
            data-index="1"
            style={{ animationDelay: isInView[1] ? "200ms" : "0ms" }}
          >
            <img
              src={Pl}
              alt="Plumber"
              className="w-full h-40 sm:h-48 rounded-lg mb-4"
            />
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Specializes in plumbing services and maintenance.
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Plumber</p>
          </div>
          <div
            className={`worker-card p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-opacity duration-700 ${
              isInView[2] ? "animate-slide-in-left" : "opacity-0"
            }`}
            data-index="2"
            style={{ animationDelay: isInView[2] ? "400ms" : "0ms" }}
          >
            <img
              src={Ca}
              alt="Carpenter"
              className="w-full h-40 sm:h-48 rounded-lg mb-4"
            />
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Skilled in custom furniture and woodwork.
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Carpenter</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
