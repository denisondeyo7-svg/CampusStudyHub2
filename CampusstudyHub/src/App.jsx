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
import Protected from './Protected'

{/* Admin */ }

import Dashboard from './Admin/Dashboard'
import Members from './Admin/Members.jsx'
import AllNotes from './Admin/AllNotes'
import AllAssessments from './Admin/AllAssessments.jsx'
import Revision from './Admin/Revision.jsx'
import AllNews from './Admin/AllNews'
import AllDeadlines from './Admin/AllDeadlines'
import Myaccount from './Admin/Myaccount'
import AddNotes from './Admin/AddNotes'
import AddNews from './Admin/AddNews'
import Test from './Admin/Test'
import AddPDF from './Admin/AddPDF'
import AddDeadline from './Admin/AddDeadline'
import EditAccount from './Admin/EditAccount'
import AddTimetable from './Admin/AddTimetable'



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

        <Route path="/AddNotes" element={
          <AddNotes />
        }


        />

        <Route path="/AssessmentsTests" element={

          <>

            <AllAssessments />
          </>
        }

        />
        <Route path="/Tests" element={
          <Test />
        }


        />

        <Route path="/RevisionPDFs" element={

          <>

            <Revision />
          </>
        }

        />
        <Route path="/AddRevisionPDFs" element={

          <>

            <AddPDF />
          </>
        }

        />
        <Route path="/NewsManagement" element={

          <>

            <AllNews />
          </>
        }
        />

        <Route path="/AddNews" element={
          <AddNews />
        }


        />



        <Route path="/DeadlinesManagement" element={

          <>

            <AllDeadlines />
          </>
        }

        />
        <Route path="/AddDeadline" element={

          <>

            <AddDeadline />
          </>
        }

        />
        <Route path="/Myaccount" element={

          <>

            <Myaccount />
          </>
        }

        />

        <Route path="/Edit" element={

          <>

            <EditAccount />
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
         <Route path="/AddTimetable" element={
          <>
            
            <AddTimetable />
           

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

      {/*Protected routes*/}

        <Route element={<Protected />}>
        
          <Route path="/Dashboard" element={
          <>

            <Navbar />
            <LandingPage />
            <Footer />
          </>
        } />
          <Route path="/Timetable" element={<Timetable />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Assessments" element={<Assessments />} />
          <Route path="/RevisionPapers" element={<Revisionpapers />} />
          <Route path="/News" element={<News />} />
          <Route path="/Deadlines" element={<Deadlines />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
     </Routes>
    </BrowserRouter>
  )
}
export default navs
