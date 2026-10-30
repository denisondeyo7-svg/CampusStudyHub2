
function Assessments(){
    const Cats = [
        {number:"1", Title:"Object Oriented Programming 1"},
        {number:"2", Title:"System Design & Architecture"},
        {number:"3", Title:"Introduction To Databases"},
        
    ]
    return(
        <div className="assessments">
            <h1>Tes<span className="dams">ts</span></h1>

            <div className="notes-wrapper">
                <p>Assessement Tests</p>
                {Cats.map((Cat)=>(
                    <div className="notes-card" key={Cat.number}>
                        <ol>
                            <li>{Cat.Title}</li>
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

export default Assessments