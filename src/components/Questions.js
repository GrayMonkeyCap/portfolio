import React from 'react';
import styles from "./Questions.module.css"
import Collapsible from 'react-collapsible';

const Questions=()=>{
    return(
       <div className={styles.container}>
           <div className={styles.questionContent}>Any Questions ?</div>
           <div className={styles.accordion}>
                <Collapsible trigger="Why Did you make this website ?" triggerStyle={{background: 'red'}}>
                    <p>
                    I created and deployed this website on a private DigitalOcean server so that I could learn more about web app design and back-end development.
                    </p>
                    <p>
                    In the future I will use this website as a nesting ground for web-based computer vision and NLP models. Though I don't expect it to be anything more than a portfolio site, I strongly suspect that these skills will be crucial to technological development in the years to come.
                    </p>
                </Collapsible>
           </div>
           
       </div>
    )
}

export default Questions