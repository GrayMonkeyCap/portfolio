import React from 'react'
import SkillData from './SkillData';
import styles from './Skills.module.css'

const SkillCards=[
    {heading: 'Devops' , sections: [
    {sectionhead:'Database(SQL)',expertise:'5'},
    {sectionhead:'Servers(Linux/Bash)',expertise:'4'},
    {sectionhead:'Servers(Linux/Bash)',expertise:'4'}
    ]
 },
 {heading: 'Machine Learning' , sections: [
    {sectionhead:'Python',expertise:'5'},
    {sectionhead:'Computer Vision(Tensorflow)',expertise:'4'},
    {sectionhead:'NLP (Spacy/TensorFlow)',expertise:'4'}
    ]
 },
 {heading: 'Data Analytics' , sections: [
    {sectionhead:'Teaching / Presenting',expertise:'5'},
    {sectionhead:'Statistical Methods',expertise:'4'},
    {sectionhead:'Visualization (Tableaue)',expertise:'3'}
    ]
 }

]

const Skills=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.heading}>Skills  Expertise
                <div className={styles.subheading}>Skills  Expertise</div>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div>1-Basic</div>
                    <div>2-Novice</div>
                    <div>3-Intermediate</div>
                    <div>4-Advanced</div>
                    <div>5-Expert</div>
                </div>
                <div className={styles.card}>
                {SkillCards.map((data)=>{
                    return(
                        <SkillData heading={data.heading} sections={data.sections}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Skills;