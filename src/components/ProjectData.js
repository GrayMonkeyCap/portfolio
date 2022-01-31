import React from 'react';
import styles from './Projects.module.css'

const ProjectData=(props)=>{
    return(
        <div className={styles.ProjectCard}>
            <div className={styles.ProjectIcon}><img src={props.icon} /></div>
            <div className={styles.ProjectHead}>{props.heading}</div>
            <div className={styles.ProjectDesc}>{props.desc}</div>

        </div>
    )
}

export default ProjectData