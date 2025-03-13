import React from "react";
import { useData } from "../context/DataContext";

const values = [
  {
    icon: "🚀",
    title: "Innovación",
    description: "Siempre estamos al día con las últimas tecnologías para ofrecer soluciones vanguardistas.",
  },
  {
    icon: "🎯",
    title: "Enfoque en resultados",
    description: "Nos comprometemos a entregar soluciones que generen un impacto real en tu negocio.",
  },
  {
    icon: "🤝",
    title: "Trabajo en equipo",
    description: "Creemos que la colaboración es clave para el éxito de cada proyecto.",
  },
];

export default function About() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div className="text-center text-lg">Cargando...</div>;
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
            <img
              src="/team.jpg" 
              alt="Nuestro equipo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4 text-primary-500 dark:text-primary-400">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-dark dark:text-light mb-2">
                  {value.title}
                </h4>
                <p className="text-dark dark:text-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-16 text-center">
          <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">
            ¿Cómo ayudamos a nuestros clientes?
          </h3>
          <p className="text-dark dark:text-light max-w-3xl mx-auto mb-6">
            En VCTech hemos trabajado con empresas de diversos sectores,
            brindando soluciones innovadoras en desarrollo de software, APIs y seguridad digital.
            Descubre cómo hemos impulsado el éxito de nuestros clientes.
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
            Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel.
            Descubre cómo podemos hacerlo juntos.
          </p>
          <a
            href="#contact"
            className="bg-white text-primary-500 px-8 py-3 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Hablemos 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
