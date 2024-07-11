import React from 'react';
import Head from 'next/head';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Courses_2 from './components/Courses_2';
import Team from './components/Team';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Awards from './components/Awards';


const Home: React.FC = () => {
  return (
    <>
    <Head>
      <title>Baobab Development Solutions</title>
      <meta name="description" content="Your page description" />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com/your-page" />
    </Head>
      <div className="w-screen">
        <section id="hero" className="bg-gradient-to-b from-[#E3974B] to-[#BC7B4C] py-10 w-screen">
          <Hero />
        </section>
        <section id="welcome" className="bg-gradient-to-b from-[#BC7B4C] to-[#96320B] pt-10 w-screen">
          <Welcome />
        </section>
        <section id="courses" className="bg-gradient-to-b from-[#96320B] to-[#E94516] py-5 w-screen">
          <h2 className="text-3xl font-bold text-center">Our Courses</h2>
          <Courses_2 />
        </section>
        <section id="team" className="bg-gradient-to-b from-[#E94516] to-[#E3974B] py-5 w-screen">
          <h2 className="text-3xl font-bold text-center ">Our Team</h2>
          <Team />
        </section> 
        <div id="awards"className="bg-gradient-to-b from-[#96320B] to-[#E3974B] grid grid-row-1 text-center ">
        <h2 className="lg:text-[50px] md:text-[32px] text-[24px] font-[600] mb-4 py-10 text-black">
          Our Accreditations & Awards
         
        </h2>
        <main className="flex flex-col items-center justify-center text-center">
     <Awards/>
        </main>
      </div>
       
        <section id="calendar" className="bg-gradient-to-b from-[#E3974B] to-[#BC7B4C] py-5 w-screen">
          <Calendar />
        </section>
        <section  id="contact" className="bg-gradient-to-b from-[#BC7B4C] to-[#96320B] py-5 w-screen">
          <Contact />
        </section>
       
      </div>
    </>
  );
};

export default Home;
