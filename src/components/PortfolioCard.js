import React from 'react';
import styles from './PortfolioCard.module.css'
import { Link } from 'react-router-dom';

const PortfolioCard=(props)=>{
    return(
        <div className={styles.container}>
         <div className={styles.image}>
             <img src={props.image}></img>
         </div>
         <div className={styles.projectcontent}>
             <div className={styles.heading}>{props.heading}</div>
             <div className={styles.desc}>{props.desc.slice(0,130)+"... "} 
             <Link to="/projectpage">
                Read More
             </Link>
             </div>
             <div className={styles.author}>{props.author}</div>
         </div>

        </div>
    )
}
export default PortfolioCard