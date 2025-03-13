import React from 'react';
import Image from 'next/image';
import { useData } from '../context/DataContext';
import logoImage from "@/../public/images/logo_sin_fondo.png"

export default function Hero() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <section id="hero" className="h-[80vh] flex items-center justify-center bg-light dark:bg-dark mb-16">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <Image
            src={logoImage}
            alt="Logo"
            width={800}
            height={600}
            className="max-w-full max-h-[70vh] object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <h1 className="text-5xl font-bold text-dark dark:text-light mb-4">
          {translations.HERO_TITLE}
        </h1>
        <p className="text-xl text-dark dark:text-light mb-8">
          {translations.HERO_SUBTITLE}
        </p>
        <a href="#services" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600">
          {translations.OUR_SERVICES_BUTTON}
        </a>
      </div>
    </section>
  );
}