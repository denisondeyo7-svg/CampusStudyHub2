import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Navbar from './Sidebar.jsx'
import LandingPage from './Heros.jsx'
import Footer from './Footer.jsx'
import Timetable from './Timetable.jsx'
import Notes from './Notes.jsx'
import Assessments from './Assessments.jsx'
import Revisionpapers from './RevisionPapers.jsx'
import News from './News.jsx'
import Deadlines from './Deadlines.jsx'
import About from './About.jsx'
import Testimonial from './Testimonials.jsx'
import Contact from './Contact.jsx'
import IndexPage from './indexPage.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import PasswordReset from './PassReset'

import './App.css'

function App(){
  return(
    <>
      <IndexPage/>
      <Footer/>
    </>
  )
}


function navs() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/"element={
          <>
            
            <App/>
            </>
        }/>
        <Route path="/Login"element={
          <>
           
            <Login/>
      
            </>
        }/>

        <Route path="/Register"element={
          <>
           
            <Register/>
      
            </>
        }/>

        <Route path="/PasswordReset"element={
          <>
           
            <PasswordReset/>
      
            </>
        }/>
        <Route path="/Dashboard"element={
          <>
            <Navbar/>
            <LandingPage/>
            <Footer />
      
            </>
        }/>

        <Route path="/Timetable"element={
          <>
            <Navbar/>
            <Timetable/>
            <Footer />
            
            </>
        }/>

        <Route path="/Notes"element={
          <>
            <Navbar/>
            <Notes/>
            
            <Footer />
            </>
        }/>

        <Route path="/Assessments"element={
          <>
            <Navbar/>
            <Assessments/>
            <Footer />
            
            </>
        }/>

        <Route path="/RevisionPapers"element={
          <>
            <Navbar/>
            <Revisionpapers/>
            <Footer />
            
            </>
        }/>

        <Route path="/News"element={
          <>
            <Navbar/>
            <News/>
            <Footer />
            
            </>
        }/>

        <Route path="/Deadlines"element={
          <>
            <Navbar/>
            <Deadlines/>
            <Footer />
            
            </>
        }/>

        <Route path="/About"element={
          <>
           <Navbar/>
            <About/>
            <Footer />
            
            </>
        }/>

        <Route path="/Testimonials"element={
          <>
           <Navbar/>
            <Testimonial/>
            <Footer />
            
            </>
        }/>

        <Route path="/Contact"element={
          <>
            <Navbar/>
            <Contact/>
            <Footer />
            
            </>
        }/>
        
      </Routes>
     
      
    </BrowserRouter>
  )
}
export default navs
