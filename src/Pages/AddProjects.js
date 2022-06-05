import React from 'react';
import styles from './AddProjects.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddProjects=()=>{
    const navigate=useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    const AddNewProject=()=>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        console.log({"projectauthor":author ,
         "projecttitle":title,
         "projectdescription":description, 
         "date":today})
    }
    return(
        <div className={styles.container}>
        <div className={styles.formcontainer}>
            <label htmlFor='projecttitle'>
                Project Title
            </label>
            <input id='projecttitle' name='projecttitle' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <label htmlFor='projectdescription'>
                Project Description
            </label>
            <input id='projectdescription' name='projectdescription' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <label htmlFor='projectauthor'>
                Project Author
            </label>
            <input id='projectauthor' name='projectauthor' value={author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
            
            <div className={styles.buttonrow}>
                <button className={styles.addbutton} onClick={()=>{AddNewProject()}}>Add</button>
                <button className={styles.cancelbutton} onClick={()=>navigate("/Portfolio")}>Cancel</button>
            </div>
            
        </div>
        </div>
    )
}
export default AddProjects;