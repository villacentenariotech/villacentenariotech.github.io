import React from "react";
import { motion } from "framer-motion";
import { useData } from "../context/DataContext";

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
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-5xl text-primary-500 dark:text-primary-300">
                    {service.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-dark dark:text-light">
                    {service.title}
                  </h3>
                </div>
                <p className="text-dark dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block text-primary-500 dark:text-primary-300 font-semibold hover:underline"
                >
                  {translations.LEARN_MORE} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">
            ¿Por qué nuestros clientes nos eligen?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Con más de X proyectos entregados, hemos ayudado a empresas a digitalizar sus procesos, 
            mejorar su eficiencia y potenciar su presencia en línea. Descubre cómo nuestras soluciones han 
            transformado negocios como el tuyo.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-500 to-primary-500 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transform transition duration-300 hover:scale-105"
          >
            Agenda una consulta gratuita 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
