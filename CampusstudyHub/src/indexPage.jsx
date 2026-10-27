import heroimage from './assets/heroes.jpg'
import Indexheader from './component/Indexheader'
import Explore from './component/Call2actions'
import About from './component/About'
import Contact from './component/Contact'

function IndexPage(){
 
    return(
        <main className="home"id='home'>
             <Indexheader/>

             <div className="heroes">
                <div className="heros-image">
                    <img src={heroimage} alt="image" />
                    

                    <div className="texts">
                        <h1 className='headline'><span className='den'>Campus</span> Study Hub</h1>
                        <h1>Your partner in academic success !</h1>
                        <small className='theme'>Never miss an important deadline. Stay informed with the latest campus news and updates, access your academic timetables, and find revision PDFs and study notes to support your learning journey. We're delighted to have you here.</small>

                        <br />
                        <div className="btn">
                            <Explore/>
                        </div>

                        <br />
                        
                    </div>

                    <br />
                    
                    
                </div>
             </div>
               <div id="about"> <About/></div>
                <div id="contact"><Contact/></div>

                

        </main>
    )
}
export default IndexPage