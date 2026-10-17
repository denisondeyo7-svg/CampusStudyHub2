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


import './App.css'



function navs() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Dashboard"element={
          <>
            
            <LandingPage/>
      
            </>
        }/>

        <Route path="/Timetable"element={
          <>
          
            <Timetable/>
            
            </>
        }/>

        <Route path="/Notes"element={
          <>
            
            <Notes/>
            
            </>
        }/>

        <Route path="/Assessments"element={
          <>
            
            <Assessments/>
            
            </>
        }/>

        <Route path="/RevisionPapers"element={
          <>
            
            <Revisionpapers/>
            
            </>
        }/>

        <Route path="/News"element={
          <>
            
            <News/>
            
            </>
        }/>

        <Route path="/Deadlines"element={
          <>
            
            <Deadlines/>
            
            </>
        }/>

        <Route path="/About"element={
          <>
           
            <About/>
            
            </>
        }/>

        <Route path="/Testimonials"element={
          <>
           
            <Testimonial/>
            
            </>
        }/>

        <Route path="/Contact"element={
          <>
            
            <Contact/>
            
            </>
        }/>
        
      </Routes>
     
      <Footer />
    </BrowserRouter>
  )
}
export default navs
