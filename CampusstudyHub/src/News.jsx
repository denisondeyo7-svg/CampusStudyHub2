import { useState,useEffect } from 'react'

function News(){
    const[ message,setmessage] = useState("");
    const [mynews,setnews]= useState([]);

    useEffect(()=>{
        fetch("http://localhost/CSHbackend/News.php",{

            method:"GET",
            credentials:"include",

        })
        .then(response => response.json())
        .then(content =>{
            if(content.success){
                setnews(content.data);
            }
            else{
                setmessage(content.message);
            }
        })
        .catch(error=>{
            console.log("Error:",error);
            
        })

    },[])


    return(
       <div className="main-news">
        <br />
        <h1>News & <span className='dams'>Updates</span></h1>

        {message && <p className='messages'>{message}</p> }

        <div className="news-container">
            <div className="news-card-container">
             

               
                {mynews.map((news)=>(

                    <div className="news-card"key={news.id}>
                        <div className="img">
                            <img src={`http://localhost/CSHbackend/News/${news.file}`} alt="News Image" />
                        </div>
                        <div className="news-content">
                            <p>{news.description}</p>
                        </div>
                    </div>

                ))}
                

                
                
            </div>

        </div>
        <br />
       </div>
       
    )
}

export default News