// // import { redirect } from "next/navigation";


// const Home = async () => {
// //   redirect('/');
//  <p>home</p>
// };

// export default Home;
"use client"
import HeroSection from '@/components/homepage/HeroSection';
import LearningTips from '@/components/homepage/LearningTips';
import TrendingCourses from '@/components/homepage/NewReleases';
import PopularCourses from '@/components/homepage/PopularCourses';
import TopInstructors from '@/components/homepage/TopInstructors';
import React from 'react';
import { motion } from "framer-motion";




const Home = () => {
    return(
      <>
      <motion.main 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      >
        <HeroSection/>
        <TrendingCourses/>
        <PopularCourses/>
        <LearningTips/>
        <TopInstructors/>
      </motion.main>
      </>
    )
};

export default Home;