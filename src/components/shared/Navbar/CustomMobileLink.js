import React from 'react';
import { useRouter } from 'next/router';

export const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle(); // Cierra el menú
    router.push(href); // Navega a la ruta
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
          h-[1px] inline-block 
          bg-light dark:bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'} 
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};