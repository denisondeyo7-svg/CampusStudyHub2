function  RevisionComponent(){
    const notes = [
        {number:"1", Title:"Object Oriented Programming 1"},
        {number:"2", Title:"System Design & Architecture"},
        {number:"3", Title:"Introduction To Databases"},
        
    ]
    return(

         <div className="notes">
            
            
            <div className="notes-wrapper">
                
                {notes.map((note)=>(
                    <div className="notes-card" key={note.number}>
                        <ol>
                            <li>{note.Title}</li>
                        </ol>
                        <div className="buttons">
                            <a href="">Delete <i className="fas fa-trash"></i></a>
                            <a href="">Edit <i className="fas fa-edit"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default RevisionComponent