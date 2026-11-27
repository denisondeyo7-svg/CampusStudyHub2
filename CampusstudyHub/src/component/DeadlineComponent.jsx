import { useState ,useEffect } from "react";

function DeadlineComponent() {
    const [deadlines,setdeadline]=useState([]);
    const [message,setmessage]=useState("");

    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Deadlines.php",{

            method:"GET",
            credentials:"include",

        })
        .then(response => response.json())
        .then(content =>{
            if(content.success){
                setdeadline(content.data);
            }
            else{
                setmessage(content.message);
            }
        })
        .catch(error=>{
            console.log("Error:",error);
            
        })

    },[])

    
    
    return (
        <div className="notes">


            <div className="notes-wrapper">
                {message}

                <ol>
                {deadlines.map((deadline) => (
                    <div className="notes-card" key={deadline.id}>
                            <li>{deadline.content}</li>
                        <div className="buttons">
                            <a href="">Delete <i className="fas fa-trash"></i></a>
                            <a href="">Edit <i className="fas fa-edit"></i></a>
                        </div>
                    </div>
                ))}
                </ol>
            </div>
        </div>
    );
}

export default DeadlineComponent;