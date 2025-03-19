import React from "react";
import Image from "next/image";
import { useData } from "../context/DataContext";
import drawDevelop from "@/../public/images/01-developer.png"
import Link from "next/link";

export default function About() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <section id="about" className="py-16 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-dark dark:text-light mb-4">
            {translations.WHOE_ARE_WE}
          </h2>
          <p className="text-xl text-dark dark:text-light mb-4">
            {translations.WHOE_ARE_WE_DESCRIPTION_1}
          </p>
          <p className="text-xl text-dark dark:text-light">
            {translations.WHOE_ARE_WE_DESCRIPTION_2}
          </p>
        </div>

        <div className="flex gap-8 mb-12">
          <div className="text-dark dark:text-light flex-1">
            <h3 className="text-2xl font-bold mb-10">
              {translations.MEET_THE_TEAM}
            </h3>
            <p>
              {data.members?.map((member, index) => (
                <Link
                  key={index}
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary dark:hover:text-primary transition-colors mb-8"
                >
                  {member.github} - {member.name}
                </Link>
              ))}
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src={drawDevelop}
              alt="Nuestro equipo"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-96 ml-auto"
              priority
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">
            {translations.OUR_VALUES}
          </h3>
          <div className="grid grid-cols-3 gap-8">
            {data.abouts?.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4 text-primary-500 dark:text-primary-400">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-dark dark:text-light mb-2">
                  {translations[`ABOUT_${value.id.toUpperCase()}`]}
                </h4>
                <p className="text-dark dark:text-light">
                  {translations[`ABOUT_${value.id.toUpperCase()}_DESCRIPTION`]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}