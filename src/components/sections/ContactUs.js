import React, { useEffect } from "react";
import Image from "next/image";
import { useData } from "../context/DataContext";
import drawDevelop from "@/../public/images/01-developer.png"
import Link from "next/link";

export default function ContactUs() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <section id="contact_us" className="py-16 bg-light dark:bg-dark">

      <div className="text-center bg-gradient-to-r from-primary-500 to-indigo-600 text-white py-10 px-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          {translations.ABOUT_HOW_WE_WORK}
        </h3>
        <p className="mb-6">
          {translations.ABOUT_HOW_WE_WORK_DESCRIPTION}
        </p>
        <Link
          href={`https://mail.google.com/mail/?view=cm&to=${data.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary-500 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          {translations.TALK}
        </Link>
      </div>
    </section>
  )
}