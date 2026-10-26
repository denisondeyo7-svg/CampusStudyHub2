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


import './App.css'

function App(){
  return(
    <>
      <IndexPage/>
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
        <Route path="/Dashboard"element={
          <>
            <Navbar/>
            <LandingPage/>
      
            </>
        }/>

        <Route path="/Timetable"element={
          <>
            <Navbar/>
            <Timetable/>
            
            </>
        }/>

        <Route path="/Notes"element={
          <>
            <Navbar/>
            <Notes/>
            
            </>
        }/>

        <Route path="/Assessments"element={
          <>
            <Navbar/>
            <Assessments/>
            
            </>
        }/>

        <Route path="/RevisionPapers"element={
          <>
            <Navbar/>
            <Revisionpapers/>
            
            </>
        }/>

        <Route path="/News"element={
          <>
            <Navbar/>
            <News/>
            
            </>
        }/>

        <Route path="/Deadlines"element={
          <>
            <Navbar/>
            <Deadlines/>
            
            </>
        }/>

        <Route path="/About"element={
          <>
           <Navbar/>
            <About/>
            
            </>
        }/>

        <Route path="/Testimonials"element={
          <>
           <Navbar/>
            <Testimonial/>
            
            </>
        }/>

        <Route path="/Contact"element={
          <>
            <Navbar/>
            <Contact/>
            
            </>
        }/>
        
      </Routes>
     
      <Footer />
    </BrowserRouter>
  )
}
export default navs
