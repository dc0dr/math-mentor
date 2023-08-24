import { Outlet, Link} from 'react-router-dom';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.scss';
import authService from "../handles/authService";

function HomePage() {
  
  const navigate = useNavigate();
  function handleLogout(){
    const response = authService.logout();
    if (response) {
      console.log("Logged out");
      navigate('/login');
    } else {
      return null;
    }
  }
  
  return(
    <div className='Home'>
      <div id='sidebar'>
        <nav>
          <h2>MathMentor</h2>
          <div id='navbar-items'>
            <Link to={`/home/dashboard`}>
                <p>Dashboard</p>
            </Link>
            
            <Link to={`/home/courses`}>
                <p>Courses</p>
            </Link>
            
            <Link to={`/home/pasco`}>
                <p>Past Questions</p>
            </Link>
            
            <Link to={'/home/messages'}>
                <p>Messages</p>
            </Link>
            
            <Link to={''} onClick={handleLogout}>
                <p>Logout</p>
            </Link>
          </div>
      </nav>
      </div>

        <div id='main-screen'>
            <Outlet />
        </div>
    </div>
  )
}

export default HomePage;
