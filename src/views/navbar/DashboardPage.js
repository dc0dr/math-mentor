import '../../styles/Dashboard.scss';
import {Link} from "react-router-dom";

function DashboardPage() {
    return(
      <div className='Dashboard'>
        <p>Welcome User</p>

        <div className='Dashboard-Content'>
          <Link to={'/student'} id={'chat-me-link'}>
            <div id='courses'>
              <p>Chat Me</p>
            </div>
          </Link>

            <div id='assignments'>
              <p>Assignments</p>
            </div>
            <div id='statistics'>
              <p>Statistics</p>
            </div>
            <div id='profile'>
              <p>Profile</p>
            </div>
            <div id="pfp"></div>
        </div>
      </div>


    )
}

export default DashboardPage;