import { useState,useEffect } from "react";
function Assessments(){
        const [files,setfile]=useState([]);
                const [messages,setmessages]=useState("");
            
                useEffect(()=>{
                    fetch("http://localhost/CSHbackend/Tests.php",{
            
                    })
                    .then(response => response.json())
                    .then(results =>{
                        if(results.success){
                            setfile(results.data);
                        }
                        else{
                            setmessages(results.message);
                        }
                    })
                    .catch(error =>{
                        console.log("Error:",error);
                        setmessages("Failed to fetch from database");
                    })
                },[])
    
    return(
        <div className="assessments">
            <h1>Tes<span className="dams">ts</span></h1>

            <div className="notes-wrapper">
                {messages}
                <p>Assessement Tests</p>
                {files.map((file)=>(
                    <div className="notes-card" key={file.id}>
                        <ol>
                            <li>{file.title1}</li>
                        </ol>
                        <div className="buttons">
                            <a href={`http://localhost/CSHbackend/downloadcat.php?file=${encodeURIComponent(file.pdf)}`}>
                            Download <i className="fas fa-download"></i>
                            </a>
                            
                            <a href={`http://localhost/CSHbackend/Tests/${file.pdf}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Read Online <i className="fas fa-server"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default Assessments