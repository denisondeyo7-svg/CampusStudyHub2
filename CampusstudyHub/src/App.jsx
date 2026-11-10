import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Account from './Account'
import NotfoundPage from './Notfound.jsx'
import Update from './Update'

{/* Admin */ }
import Dashboard from './Admin/Dashboard'
import Members from './Admin/Members.jsx'
import AllNotes from './Admin/AllNotes'
import AllAssessments from './Admin/AllAssessments.jsx'
import Revision from './Admin/Revision.jsx'
import AllNews from './Admin/AllNews'
import AllDeadlines from './Admin/AllDeadlines'
import Myaccount from './Admin/Myaccount'


import './App.css'


function App() {
  return (
    <>

      <IndexPage />
      <Footer />
    </>
  )
}


function navs() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="*" element={

          <>
            <NotfoundPage />
          </>
        }

        />

        <Route path="/Home" element={

          <>
            <Dashboard />
          </>
        }

        />
        <Route path="/Members" element={

          <>

            <Members />
          </>
        }

        />

        <Route path="/NotesManagement" element={

          <>

            <AllNotes />
          </>
        }

        />

        <Route path="/AssessmentsTests" element={

          <>

            <AllAssessments />
          </>
        }

        />

        <Route path="/RevisionPDFs" element={

          <>

            <Revision />
          </>
        }

        />

        <Route path="/NewsManagement" element={

          <>

            <AllNews />
          </>
        }

        />

        <Route path="/DeadlinesManagement" element={

          <>

            <AllDeadlines />
          </>
        }

        />
        <Route path="/Myaccount" element={

          <>

            <Myaccount />
          </>
        }

        />



        <Route path="/" element={
          <>

            <App />
          </>
        } />


        <Route path="/Login" element={
          <>

            <Login />

          </>
        } />

        <Route path="/Register" element={
          <>

            <Register />

          </>
        } />

        <Route path="/PasswordReset" element={
          <>

            <PasswordReset />

          </>
        } />

        <Route path="/UpdateAccount" element={
          <>

            <Update />

          </>
        } />
        <Route path="/Accounts" element={
          <>

            <Navbar />
            <Account />
            <Footer />
          </>
        } />
        <Route path="/Dashboard" element={
          <>
            <Navbar />
            <LandingPage />
            <Footer />

          </>
        } />

        <Route path="/Timetable" element={
          <>
            <Navbar />
            <Timetable />
            <Footer />

          </>
        } />

        <Route path="/Notes" element={
          <>
            <Navbar />
            <Notes />

            <Footer />
          </>
        } />

        <Route path="/Assessments" element={
          <>
            <Navbar />
            <Assessments />
            <Footer />

          </>
        } />

        <Route path="/RevisionPapers" element={
          <>
            <Navbar />
            <Revisionpapers />
            <Footer />

          </>
        } />

        <Route path="/News" element={
          <>
            <Navbar />
            <News />
            <Footer />

          </>
        } />

        <Route path="/Deadlines" element={
          <>
            <Navbar />
            <Deadlines />
            <Footer />

          </>
        } />

        <Route path="/About" element={
          <>
            <Navbar />
            <About />
            <Footer />

          </>
        } />

        <Route path="/Testimonials" element={
          <>
            <Navbar />
            <Testimonial />
            <Footer />

          </>
        } />

        <Route path="/Contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />

          </>
        } />

      </Routes>


    </BrowserRouter>
  )
}
export default navs
