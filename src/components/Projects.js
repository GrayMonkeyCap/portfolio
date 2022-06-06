import React from 'react';
import ProjectData from './ProjectData';
import styles from './Projects.module.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const ProjectCard=[{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"},

{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"},

{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"},

{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"},

{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"}]
const Projects=()=>{
    return(
        <div className={styles.container}>
        <div className={styles.heading}>Latest Projects
            <div className={styles.subheading}>Latest Projects</div>
        </div>
        <Carousel containerClass={styles.contentProject} responsive={responsive}>
        {ProjectCard.map((data)=>{
            return(
                <ProjectData icon={data.icon} heading={data.heading} desc={data.desc}/>
            )
        })}
        </Carousel>
        
        </div>
    )
}

export default Projects;