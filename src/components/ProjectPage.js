import React from "react"
import styles from "./ProjectPage.module.css"
const ProjectPage = (props) => {
    return(
        <div className={styles.container}>
            <h1 style={{color:'white'}}>Project Title</h1>
            <img src="logo192.png"></img>
            <div className={styles.author}>
                Harrison Jansma, Jan 20 - Feb 20, 2020
            </div>
            <div className={styles.description}>
            A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus eros consequat, bibendum tellus nec, elementum sem. Quisque sed ante at arcu tempus fringilla. Cras efficitur, arcu nec rutrum fringilla, nisi erat fringilla risus, quis vulputate dolor magna nec nisi. In quis ultricies est. Phasellus blandit purus mauris, euismod maximus dui sagittis eget. Suspendisse ac arcu mi. Phasellus sit amet leo id augue laoreet vestibulum sit amet ut erat. Maecenas at velit mi. Quisque venenatis rhoncus nunc at maximus.Curabitur hendrerit massa eros, id aliquet ante euismod blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu est augue. Nunc imperdiet, mauris at placerat bibendum, tortor sapien dictum lectus, quis ultricies urna nunc eget arcu. Nunc facilisis leo ullamcorper arcu posuere congue. Proin rutrum magna dolor, a dapibus neque aliquam ac. Duis eu nisl elit. Nunc placerat cursus velit at vestibulum. Pellentesque lobortis nec sem non pellentesque. Maecenas a eleifend orci, pretium lacinia augue. Maecenas pulvinar tellus congue, luctus dolor id, scelerisque nisl. Aenean semper dapibus libero id congue.

            </div>

        </div>
    )
    
}

export default ProjectPage