import React from "react";
import { motion } from "framer-motion";
import { useData } from "../context/DataContext";
import Link from "next/link";

export default function Services() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <section id="services" className="py-16 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark dark:text-light">{translations.OUR_SERVICES_TITLE}</h2>
          <p className="text-lg text-dark dark:text-light max-w-2xl mx-auto mt-4">{translations.OUR_SERVICES_SUBTITLE}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services?.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-6 lg:p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4 lg:flex-col lg:space-x-0">
                  <span className="text-5xl text-primary-500 dark:text-primary-300 lg:my-2">
                    {service.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-dark dark:text-light lg:mx-2 lg:text-xl lg:text-center">
                    {translations[`SERVICE_${service.id.toUpperCase()}`]}
                  </h3>
                </div>
                <p className="text-dark dark:text-gray-300 lg:text-base mb-4 lg:text-center">
                  {translations[`SERVICE_${service.id.toUpperCase()}_DESCRIPTION`]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">
            {translations.OUR_SERVICES_CONTACT}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            {translations.OUR_SERVICES_BECAUSE}
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href={`https://mail.google.com/mail/?view=cm&to=${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-500 to-primary-500 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transform transition duration-300 hover:scale-105"
          >
            {translations.OUR_SERVICES_RESERVE}
          </Link>
        </div>

      </div>
    </section>
  );
}
