import React from 'react';
import styles from './CourseCard.module.css'


const CourseCard=(props)=>{
    return(
        <div className={styles.container}>
         <div className={styles.projectcontent}>
             <div className={styles.heading}>{props.name}</div>
             <div className={styles.desc}>Content: {props.content}</div>
             <div className={styles.desc}>Professor Name: {props.professorname}</div>
             <div className={styles.desc}>Keywords: {props.keywords}</div>
             <div className={styles.desc}>Duration: {props.duration}</div>
             <div className={styles.desc}>Place: {props.place}</div>
             
         </div>

        </div>
    )
}
export default CourseCard