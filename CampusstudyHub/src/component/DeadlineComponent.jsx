

function DeadlineComponent() {
    const notes = [
        { number: "1", Title: "Kindly remember to register for all courses by friday" },
        { number: "2", Title: "Kindly remember to register for all courses by friday" },


    ]
    return (
        <div className="notes">


            <div className="notes-wrapper">

                {notes.map((note) => (
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
    );
}

export default DeadlineComponent;