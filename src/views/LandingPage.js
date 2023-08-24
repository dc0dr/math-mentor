import { useNavigate } from 'react-router-dom';
import '../styles/Landing.scss';


function LandingPage() {

  const navigate = useNavigate();

  function handleLogin(){
    navigate('/login');
  }

  function handleSignUp(){
    navigate('/sign-up');
  }

  return (
    <div className='App'>
      <div className="Navigation">
        <p><a href='#'>Guide</a></p>
        <p><a href='#'>Facts</a></p>
      </div>
      
      <div>
        <h2>MathMentor</h2>
      </div>

      <div className='Text-div'>
        <p>MathMentor is an online school system for upper primary level students in Ghana</p>
        <p>to help them with their studies in relation to mathematics. The system follows the</p>
        <p>syllabus of GES.</p>
      </div>

      <div>
        <button id="btn-1" onClick={handleLogin}>
          Login
        </button>

        <button id="btn-2" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
