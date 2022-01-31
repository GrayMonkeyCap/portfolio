import React from 'react';
import ProjectData from './ProjectData';
import styles from './Projects.module.css'

const ProjectCard=[{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"},

{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"},

{icon:'assets/projecticon.png',heading:'AUTOMATING AWS EC2 SHUTDOWN WITH BASH SCRIPTS',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)"}]
const Projects=()=>{
    return(
        <div className={styles.container}>
        <div className={styles.heading}>Latest Projects
            <div className={styles.subheading}>Latest Projects</div>
        </div>
        <div className={styles.contentProject}>
        {ProjectCard.map((data)=>{
            return(
                <ProjectData icon={data.icon} heading={data.heading} desc={data.desc}/>
            )
        })}
        </div>
        
        </div>
    )
}

export default Projects;