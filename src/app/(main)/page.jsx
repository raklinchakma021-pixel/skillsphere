// // import { redirect } from "next/navigation";


// const Home = async () => {
// //   redirect('/');
//  <p>home</p>
// };

// export default Home;

import HeroSection from '@/components/homepage/HeroSection';
import LearningTips from '@/components/homepage/LearningTips';
import TrendingCourses from '@/components/homepage/NewReleases';
import PopularCourses from '@/components/homepage/PopularCourses';
import TopInstructors from '@/components/homepage/TopInstructors';
import React from 'react';



const Home = () => {
    return(
      <>
      <main>
        <HeroSection/>
        <TrendingCourses/>
        <PopularCourses/>
        <LearningTips/>
        <TopInstructors/>
      </main>
      </>
    )
};

export default Home;