import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="mb-6 flex items-center justify-between bg-amber-200 px-6 py-4 text-stone-900 sm:px-10 lg:px-16 ">
      <Link
        href="/"
        className="border-2 border-amber-50 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-50 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Home
      </Link>
      <Link
        href="/products"
        className="border-2 border-amber-50 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-50 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        View Products
      </Link>
    </header>
  );
};

export default Header;
