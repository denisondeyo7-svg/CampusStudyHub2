import { useState,useEffect } from "react";
function AdminCards() {
    const [total ,settotal]=useState([]);
    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Allmembers.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                settotal(data.result);
            }
        })

        .catch(error => {
            console.log("total error:",error);
        });
    },[]);

    const cards =[
        {no:"1",title:"Members",number:total, i:"fas fa-users"},
        {no:"2",title:"Messages",number:"10+", i:"fas fa-reply"},
        {no:"3",title:"Admins",number:"10+", i:"fas fa-shield"},
        {no:"4",title:"Notes",number:"30+", i:"fas fa-book"},
        {no:"5",title:"PDFs",number:"10+", i:"fas fa-graduation-cap"},
        {no:"6",title:"Tests",number:"10+", i:"fas fa-layer-group"},
        {no:"7",title:"News",number:"10+", i:"fas fa-newspaper"},
        {no:"8",title:"Deadlines",number:"10+", i:"fa-regular fa-calendar-days"},
        {no:"9",title:"IT",number:"10+", i:"fas fa-code"},
        {no:"10",title:"Computer Science",number:"10+", i:"fas fa-laptop"},
    ]
    return (
        <>

         {cards.map((card)=>(
            <div className="admin-card" key={card.no}>
                <div className="card-top">
                    <p>{card.title}</p>
                    <p>{card.number}</p>
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