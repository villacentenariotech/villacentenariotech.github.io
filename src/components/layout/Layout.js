import React from 'react'

export const Layout = ({ children, className = "" }) => {
  return (
    <div className={`
      w-full h-full inline-block 
      bg-light dark:bg-dark 
      z-0 p-32 xl:p-24  lg:p-16 mb:p-12 sm:p-8 
      ${className}
    `}>
      {children}
    </div>
  )
}