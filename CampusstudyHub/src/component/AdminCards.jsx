function AdminCards() {

    const cards =[
        {no:"1",title:"Members",number:"10+", i:"fas fa-users"},
        {no:"2",title:"Messages",number:"10+", i:"fas fa-reply"},
        {no:"3",title:"Admins",number:"10+", i:"fas fa-shield"},
        {no:"4",title:"Notes",number:"30+", i:"fas fa-book"},
        {no:"5",title:"PDFs",number:"10+", i:"fas fa-graduation-cap"},
        {no:"6",title:"Tests",number:"10+", i:"fas fa-layer-group"},
        {no:"7",title:"News",number:"10+", i:"fas fa-newspaper"},
        {no:"8",title:"Deadlines",number:"10+", i:"fa-regular fa-calendar-days"},
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