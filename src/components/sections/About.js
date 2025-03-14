import React from "react";
import Image from "next/image";
import { useData } from "../context/DataContext";
import drawDevelop from "@/../public/images/01-developer.png"

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
            ¿Quiénes somos?
          </h2>
          <p className="text-xl text-dark dark:text-light max-w-2xl">
            En VCTech, somos un equipo apasionado por la tecnología, dedicado a crear soluciones digitales que marcan la diferencia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-dark dark:text-light mb-4">
              Conoce al equipo
            </h3>
            <p className="text-dark dark:text-light mb-4">
              Somos un grupo de 3 profesionales con base en Villa Centenario, especializados en desarrollo de software, creación de APIs y mantenimiento de sistemas. Nuestra misión es ayudarte a alcanzar tus objetivos tecnológicos con soluciones innovadoras y de alta calidad.
            </p>
            <p className="text-dark dark:text-light">
              Nos apasiona resolver problemas complejos y transformar ideas en realidades digitales. Ya sea que necesites una aplicación web, una API robusta o mantenimiento de software, estamos aquí para ayudarte.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={drawDevelop}
              alt="Nuestro equipo"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
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