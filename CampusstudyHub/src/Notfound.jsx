

function NotfoundPage() {
    return (
        <div className="page-container">

            <div className="page-content-container">

                <div className="page">
                    <h1 className="code">404</h1>
                    <h2 className="error">This page doesn’t exist.</h2>
                    <small>We could not locate the specific page  you asked for.</small>
        <br />
                    <p><a href="/" ><i className="fas fa-arrow-left" ></i> Go Back</a></p>
                </div>
            </div>
            
        </div>
    );
}

export default NotfoundPage;