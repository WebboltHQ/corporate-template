import React from 'react';
import Link from 'next/link';

import classes from '../config/classes';

const Nav = ({ name, childPages }) => {
  return (
    <header className={`${classes.wrapper} text-gray-700 body-font`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-semibold">{name}</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {childPages.map(page => (
            <Link href={`/${page.path}`} key={page.path}>
              <a className="mr-5 hover:text-gray-900">{page.name}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
