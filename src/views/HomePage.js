import { Outlet, Link} from 'react-router-dom';
import React, {useState} from 'react';
import '../styles/Home.scss';

function HomePage() {
  
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
            
            <Link to={'/login'}>
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
