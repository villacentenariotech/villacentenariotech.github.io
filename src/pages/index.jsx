import React from 'react';
import Head from 'next/head';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import { useData } from '@/components/context/DataContext';
import { Footer, Layout } from '@/components';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';

export default function Home() {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{translations.BROWSER_TAD_TITLE}</title>
        <meta name="description" content={translations.META_CONTENT} />
      </Head>

      <main className='flex w-full h-auto items-center scroll-smooth text-dark dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <Hero />
          <Services />
          <About />
          <Projects />
        </Layout>
      </main>
    </>
  );
}