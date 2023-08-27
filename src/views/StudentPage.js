import {Outlet , Link} from 'react-router-dom';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.scss';
import MessagesPage from "./navbar/MessagesPage";

function StudentPage(){
  const [showMessages, setShowMessages] = useState(true);
  
  const handleOutletClick = () => {
    // This function will be called when an element within Outlet is clicked.
    setShowMessages(false);
  };
  
  return(
    <div className='Home'>
      <div id='sidebar'>
        <nav>
          <h2>MathMentor</h2>
          <div id='navbar-items'>
            <Link to={`/student/lesson-plan`} onClick={handleOutletClick}>
                <p>Lesson Plan</p>
            </Link>
          </div>
        </nav>
      </div>
      <div id='main-screen'>
          <Outlet />
        {/*{showMessages && <MessagesPage />}*/}
      </div>
    </div>
  )
}
export default StudentPage;