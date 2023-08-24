import '../../styles/Dashboard.scss';

function DashboardPage() {
    return(
        <div className='Dashboard'>
            <p>Welcome User</p>

            <div className='Dashboard-Content'>
                <div id='courses'>
                    <p>My Courses</p>
                </div>
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