import React from 'react';
import Head from 'next/head';
import { useData } from '@/components/context/DataContext';
import { About, Hero, Layout, Projects, Services } from '@/components';

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