import React, { useState, useEffect } from "react";

const About = () => {
  const [animationState, setAnimationState] = useState({
    heading: false,
    firstPara: false,
    missionHeading: false,
    missionPara: false,
    whyHeading: false,
    listItems: [],
    getInTouch: false,
  });

  useEffect(() => {
    // Sequential animation with delays
    const timers = [];

    timers.push(setTimeout(() => setAnimationState((prev) => ({ ...prev, heading: true })), 200));
    timers.push(setTimeout(() => setAnimationState((prev) => ({ ...prev, firstPara: true })), 600));
    timers.push(setTimeout(() => setAnimationState((prev) => ({ ...prev, missionHeading: true })), 1000));
    timers.push(setTimeout(() => setAnimationState((prev) => ({ ...prev, missionPara: true })), 1400));
    timers.push(setTimeout(() => setAnimationState((prev) => ({ ...prev, whyHeading: true })), 1800));

    // Animate each list item sequentially
    const listItems = [
      "Access to a wide network of skilled workers.",
      "Easy-to-use interface for booking and managing services.",
      "Verified professionals to ensure quality work.",
      "Customer support for assistance with your queries.",
    ];
    listItems.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => {
            const updatedListItems = [...prev.listItems];
            updatedListItems[index] = true;
            return { ...prev, listItems: updatedListItems };
          });
        }, 2200 + index * 400) // Staggered animation for each list item
      );
    });

    timers.push(setTimeout(() => setAnimationState((prev) => ({ ...prev, getInTouch: true })), 4000));

    return () => timers.forEach((timer) => clearTimeout(timer)); // Clean up timers
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen flex flex-col items-center justify-center px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl my-5">
        {/* Heading */}
        <h1
          className={`text-3xl font-bold text-gray-800 text-center mb-6 transition-all duration-500 transform ${
            animationState.heading ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          About Us
        </h1>

        {/* First Paragraph */}
        <p
          className={`text-gray-600 text-lg mb-4 transition-all duration-500 transform ${
            animationState.firstPara ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Welcome to <span className="font-bold text-purple-600">Worker Booking</span>, your reliable platform for finding skilled workers for various tasks and projects. We connect you with professionals who are experienced in their respective fields to ensure quality service.
        </p>

        {/* Mission Section */}
        <h2
          className={`text-2xl font-semibold text-gray-800 mt-6 mb-4 transition-all duration-500 transform ${
            animationState.missionHeading ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Our Mission
        </h2>
        <p
          className={`text-gray-600 text-lg mb-4 transition-all duration-500 transform ${
            animationState.missionPara ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Our mission is to simplify the process of hiring skilled workers by providing a seamless platform where users can discover, compare, and book professionals based on their needs. We are committed to empowering workers and clients alike by fostering trust and transparency.
        </p>

        {/* Why Choose Us Section */}
        <h2
          className={`text-2xl font-semibold text-gray-800 mt-6 mb-4 transition-all duration-500 transform ${
            animationState.whyHeading ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          {[
            "Access to a wide network of skilled workers.",
            "Easy-to-use interface for booking and managing services.",
            "Verified professionals to ensure quality work.",
            "Customer support for assistance with your queries.",
          ].map((item, index) => (
            <li
              key={index}
              className={`transition-all duration-500 transform ${
                animationState.listItems[index]
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Get In Touch Section */}
        <h2
          className={`text-2xl font-semibold text-gray-800 mt-6 mb-4 transition-all duration-500 transform ${
            animationState.getInTouch ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Get in Touch
        </h2>
        <p
          className={`text-gray-600 text-lg transition-all duration-500 transform ${
            animationState.getInTouch ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          If you have any questions or need assistance, feel free to{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact us
          </a>
          . We're here to help!
        </p>
      </div>
    </div>
  );
};

export default About;
