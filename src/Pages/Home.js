import React from 'react';
import AboutMe from '../components/AboutMe';
import Aoi from '../components/Aoi';
import Intro from '../components/Intro';

const Home=(props)=>{
    console.log(props)
    return(
        <>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Aoi></Aoi>
        </>
    );
}

export default Home;