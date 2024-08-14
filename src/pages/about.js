import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import fsPromises from 'fs/promises';
import path from 'path'
import AnimatedText from '@/components/AnimatedText'
import OurServices from '@/components/OurServices'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import profilePic from "../../public/images/profile/logo-black.png"
import { TEXT_ABOUT_PART_1_ES, TEXT_ABOUT_PART_3_ES, TITLE_ABOUT_ES } from '@/components/utils/constans'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src/components/utils/abouts.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const props = {
    objectData: objectData
  };

  return {
    props: props
  };
}

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [ isInView, value, motionValue])
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [ springValue, value])

  return <span ref={ref}></span>

}

const about = ({objectData}) => {
  return (
    <>
      <Head>
        <title>VCTECH | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={TITLE_ABOUT_ES} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            
              <p className='font-medium'>{TEXT_ABOUT_PART_1_ES}</p>
              <p className='my-4 font-medium'>Nuestra Historia</p>
              <p className='font-medium'>{TEXT_ABOUT_PART_3_ES}</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid borde-dark 
              bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="VCTech" className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col  items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>satisfied clients</h2>
              </div>
              <div className='flex flex-col  items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>projet completed</h2>
              </div>
              <div className='flex flex-col  items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>years of experience</h2>
              </div>
            </div>
          </div>
          
          <OurServices experiences={objectData.experiences} />
        </Layout>
      </main>
    </>
  )
}

export default about