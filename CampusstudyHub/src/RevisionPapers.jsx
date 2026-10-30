
function Revisionpapers(){

    const PDFS = [
        {number:"1", Title:"Object Oriented Programming 1"},
        {number:"2", Title:"System Design & Architecture"},
        {number:"3", Title:"Introduction To Databases"},
        
    ]

    return(
        <div className="pdfs">
            <h1>Revision <span className="dams">Papers</span></h1>

            <div className="notes-wrapper">
                <p>Revision Papers</p>
                {PDFS.map((PDF)=>(
                    <div className="notes-card" key={PDF.number}>
                        <ol>
                            <li>{PDF.Title}</li>
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

export default Revisionpapers