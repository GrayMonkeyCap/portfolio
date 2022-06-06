import React from 'react';
import styles from './PublicationCard.module.css'
import { Link } from 'react-router-dom';

const PublicationCard=(props)=>{
    return(
        <div className={styles.container}>
         
         <div className={styles.projectcontent}>
             <div className={styles.heading}><a href={props.link}>{props.title}</a></div>
             <div className={styles.desc}>{props.abstract} </div>
             <div className={styles.publishedin}>{props.publishedin}
             <a href={props.link}>{props.link}</a>
             </div>
             <div className={styles.author}>{props.author}</div>
         </div>
        </div>
    )
}
export default PublicationCard