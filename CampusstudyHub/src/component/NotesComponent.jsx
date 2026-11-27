import { useState,useEffect } from "react";
function NotesComponent() {
  
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
            
            {messages &&<p>{messages}</p> }
            <div className="notes-wrapper">
                <ol>
                {allnotes.map((notes)=>(
                    <div className="notes-card" key={notes.id}>
                        
                            <li>{notes.title1}</li>
                        
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

export default NotesComponent;