import { useState,useEffect } from "react";
function  RevisionComponent(){
    const [files,setfile]=useState([]);
        const [messages,setmessages]=useState("");
    
        useEffect(()=>{
            fetch("http://localhost/CSHbackend/Pdfs.php",{
    
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
                setmessages("Something went wrong");
            })
        },[])
    
    return(

         <div className="notes">
            
            
            <div className="notes-wrapper">
                {messages && <p>{messages}</p> }
                <ol>
                {files.map((file)=>(
                
                    <div className="notes-card" key={file.id}>
                            <li>{file.title1}</li>
                        <div className="buttons">
                            <a href="">Delete <i className="fas fa-trash"></i></a>
                            <a href="">Edit <i className="fas fa-edit"></i></a>
                        </div>
                    </div>
                ))}
                </ol>
            </div>
        </div>

    )
}

export default RevisionComponent