import { useState,useEffect } from "react";
function AdminCards() {

    //all members
    const [members_total ,setmembers_total]=useState([]);
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/totalmembers.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                setmembers_total(data.content);
            }
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);


    //admins
    const [administrator ,setadmin]=useState("");
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Admins.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.isadmin){
                setadmin(data.role);
            }
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);


    //messages
    const[allmessages,getall]=useState();
    
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Allmessages.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                getall(data.my_messages);
            }
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);

/*
    //allnotes

    const [allnotes,getnotes]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Allnotes.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(notesdata=>{
            if(notesdata.success){
                getnotes(notesdata.notes_result);
            }
            
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);

    //deadlines

    const [deadline,getdeadline]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Alldeadlines.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(deadlines_data=>{
            if(deadlines_data.success){
                getdeadline(deadlines_data.deadline_result);
            }
            
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);
*/
    //it students

    const [isIT,setisIT]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/It.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(students_it=>{
            if(students_it.success){
                setisIT(students_it.it_students);
            }
            
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);



    //csc students

    const [iscsc,setiscsc]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/csc.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(students_csc=>{
            if(students_csc.success){
                setiscsc(students_csc.csc_students);
            }
            
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);

    const cards =[
        {no:"1",title:"Members",number:members_total, i:"fas fa-user-tie"},
        {no:"2",title:"Messages",number:allmessages, i:"fas fa-reply"},
        {no:"3",title:"Admins",number:administrator, i:"fas fa-user-lock"},
        /*{no:"4",title:"Notes",number:allnotes, i:"fas fa-book"},
        {no:"5",title:"PDFs",number:"10+", i:"fas fa-graduation-cap"},
        {no:"6",title:"Tests",number:"10+", i:"fas fa-layer-group"},
        {no:"7",title:"News",number:"10+", i:"fas fa-newspaper"},
        {no:"8",title:"Deadlines",number:deadline, i:"fa-regular fa-calendar-days"},*/
        {no:"9",title:"IT",number:isIT, i:"fas fa-database"},
        {no:"10",title:"Computer Science",number:iscsc, i:"fas fa-laptop"},
    ]
    return (
        <>

         {cards.map((card)=>(
            <div className="admin-card" key={card.no}>
                <div className="card-top">
                    <p>{card.title}</p>
                    <h2>{card.number}</h2>
                </div>
                <div className="icon">
                    <i className={card.i}></i>
                </div>
            </div>
         ))}
            
        </>
    );
}

export default AdminCards;