
function Notes(){

    const notes = [
        {number:"1", Title:"Object Oriented Programming 1"},
        {number:"2", Title:"System Design & Architecture"},
        {number:"3", Title:"Introduction To Databases"},
        
    ]

    return(
        <div className="notes">
            <h1>Not<span className="dams">es</span></h1>

            <div className="notes-wrapper">
                <p>Access notes here</p>
                {notes.map((note)=>(
                    <div className="notes-card" key={note.number}>
                        <ol>
                            <li>{note.Title}</li>
                        </ol>
                        <div className="buttons">
                            <a href="">Download <i className="fas fa-download"></i></a>
                            <a href="">Read Online <i className="fas fa-server"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes