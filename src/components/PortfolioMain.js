import React from 'react';
import PortfolioCard from './PortfolioCard';
import styles from './PortfolioMain.module.css';
import { useNavigate } from 'react-router-dom';

const PortfolioData=[{image:'/logo512.png',heading:'Automating EWS EC2 Shutdown with Bash Scripts',desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus eros consequat, bibendum tellus nec, elementum sem. Quisque sed ante at arcu tempus fringilla. Cras efficitur, arcu nec rutrum fringilla, nisi erat fringilla risus, quis vulputate dolor magna nec nisi. In quis ultricies est. Phasellus blandit purus mauris, euismod maximus dui sagittis eget. Suspendisse ac arcu mi. Phasellus sit amet leo id augue laoreet vestibulum sit amet ut erat. Maecenas at velit mi. Quisque venenatis rhoncus nunc at maximus.Curabitur hendrerit massa eros, id aliquet ante euismod blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eu est augue. Nunc imperdiet, mauris at placerat bibendum, tortor sapien dictum lectus, quis ultricies urna nunc eget arcu. Nunc facilisis leo ullamcorper arcu posuere congue. Proin rutrum magna dolor, a dapibus neque aliquam ac. Duis eu nisl elit. Nunc placerat cursus velit at vestibulum. Pellentesque lobortis nec sem non pellentesque. Maecenas a eleifend orci, pretium lacinia augue. Maecenas pulvinar tellus congue, luctus dolor id, scelerisque nisl. Aenean semper dapibus libero id congue.",author:"Harrison Jansma on January 20, 2020"},
{image:'/logo512.png',heading:'Automating EWS EC2 Shutdown with Bash Scripts',
desc:"A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)",author:"Harrison Jansma on January 20, 2020"}]
const PortfolioMain=()=>{
    const navigate=useNavigate();

    return(
        <div className={styles.container}>
        <div className={styles.heading}>Portfolio
            <div className={styles.subheading}>Portfolio</div>
        </div>
        <div className={styles.projectbutton}>
            <button className={styles.addprojectbutton} onClick={()=>navigate("/AddProjects")}>Add New Project</button>
        </div>
        
        <div className={styles.cards}>
        {PortfolioData.map((data)=>{
            return(
                <PortfolioCard image={data.image} heading={data.heading} desc={data.desc} author={data.author}/>
            )
        })}

        </div>
        </div>
    )
}
export default PortfolioMain