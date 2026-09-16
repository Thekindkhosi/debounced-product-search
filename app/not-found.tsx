import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4ee] px-6 py-10 text-stone-900 sm:px-10 lg:px-16">
      <h1 className="text-4xl font-bold text-stone-900">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-stone-700">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
