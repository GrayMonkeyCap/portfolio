import React from 'react';
import styles from './Intro.module.css'

const Intro=()=>{
    return(
        <>
            
            <div className={styles.introContainer}>
                <div className= {styles.intro}>
                <div className={styles.ellipse}></div>
                    <div className={styles.text1}>Hi, I am</div>
                    <div className={styles.gradientText}>Harrison Jansma</div>
                    <div className={styles.text2}>Contemplative coder and analyst . Inspired by tough problems</div>
                    <button className={styles.projectbtn}>My Projects</button>
                </div>

                <div className={styles.profilepic}>
                <img src='/assets/profilepic.png'></img>
                </div>
            </div>
            <div className={styles.arrows}>
                <img src='/assets/arrows.png'></img>
            </div>
        </>
        
    )

}

export default Intro;