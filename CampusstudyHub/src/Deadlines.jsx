import { useState,useEffect } from "react"
function Deadlines(){
    const [message,setmessage]=useState("");
    const [deadlines,setdeadline]=useState([]);
    

    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Deadlines.php",{

            method:"GET",
            credentials:"include",

        })
        .then(response => response.json())
        .then(deadlinecontent =>{
            if(deadlinecontent.success){
                setdeadline(deadlinecontent.data);
            }
            else{
                setdeadline(deadlinecontent.message);
            }
        })
        .catch(error=>{
            console.log("Error:",error);
            setdmessage("Something went wrong")
            
        })

    },[])
    return(
        <div className="deadlines">
            <h1>Dead<span className="dams">lines</span></h1>

            {message}
            
            <div className="deadline-container">

               
                    {message}
                    
                    <ol>
                    {deadlines.map((deadline)=>(
                            <div className="deadline-card">
                                
                                <li><p key={deadline.id}>
                                    {deadline.content}</p>
                                </li>
                                

                            </div>
                        ))}
                        
                        </ol>
                    

                </div>
        </div>
    )
}

export default Deadlines