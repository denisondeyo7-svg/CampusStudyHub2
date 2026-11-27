import { useState,useEffect } from "react";
function Notes(){

    const [allnotes,setnotes]=useState([]);
        const [messages,setmessages]=useState("");
    
        useEffect(()=>{
            fetch("http://localhost/CSHbackend/Notes.php",{
    
            })
            .then(response => response.json())
            .then(results =>{
                if(results.success){
                    setnotes(results.data);
                }
                else{
                    setmessages(results.messages);
                }
            })
            .catch(error =>{
                console.log("Error:",error);
                setmessages("Something went wrong");
            })
        },[])
    
    return(
        <div className="notes">
            <h1>Not<span className="dams">es</span></h1>

            <div className="notes-wrapper">
                <p>Access notes here</p>

                {messages &&<p>{messages}</p>}
                <ol>
                {allnotes.map((note)=>(
                    <div className="notes-card" key={note.id}>
                            <li>{note.title1}</li>
                        <div className="buttons">
                            <a href={`http://localhost/CSHbackend/download.php?file=${encodeURIComponent(note.pdf)}`}>
                            Download <i className="fas fa-download"></i>
                            </a>

                            <a 
                            href={`http://localhost/CSHbackend/Notes/${note.pdf}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Read Online <i className="fas fa-server"></i>
                            </a>
                        </div>
                    </div>
                ))}
                </ol>
            </div>
        
        </div>
    )
}

export default Notes