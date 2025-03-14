import React from "react";
import Image from "next/image";
import { useData } from "../context/DataContext";
import drawDevelop from "@/../public/images/01-developer.png"

export default function ContactUs() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <section id="contact_us" className="py-16 bg-light dark:bg-dark">
      <div className=" text-center">
        <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">
          ¿Cómo ayudamos a nuestros clientes?
        </h3>
        <p className="text-dark dark:text-light max-w-3xl mx-auto mb-6">
          En VCTech hemos trabajado con empresas de diversos sectores, brindando soluciones innovadoras en desarrollo de software, APIs y seguridad digital. Descubre cómo hemos impulsado el éxito de nuestros clientes.
        </p>
        <a
          href="#casos-de-exito"
          className="text-primary-500 dark:text-primary-300 hover:underline font-semibold"
        >
          Ver casos de éxito →
        </a>
      </div>

      <div className="text-center bg-gradient-to-r from-primary-500 to-indigo-600 text-white py-10 px-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          ¿Quieres conocer más sobre cómo trabajamos?
        </h3>
        <p className="mb-6">
          Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel. Descubre cómo podemos hacerlo juntos.
        </p>
        <a
          href="#contact"
          className="bg-white text-primary-500 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Hablemos 🚀
        </a>
      </div>
    </section>
  )
}