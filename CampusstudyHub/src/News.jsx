import newsimg from './assets/hero.png'

function News(){

    return(
       <div className="news">
        <h1>News & <span className='dams'>Updates</span></h1>

        <div className="news-container">
            <div className="news-card-container">
                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>

                <div className="news-card">
                    <div className="img">
                        <img src={newsimg} alt="News Img" />
                    </div>
                    <div className="news-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum voluptates!</p>
                    </div>
                </div>
                
            </div>

        </div>
        <br />
       </div>
       
    )
}

export default News