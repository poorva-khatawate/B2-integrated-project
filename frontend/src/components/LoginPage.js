import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert2';
import './LoginPage.css';
function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { username, password });
      if (res.data.success) {
        localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
        setIsLoggedIn(true);
        navigate(location.state?.from || '/viewpage');  // Navigate to previous page or '/viewpage'
        swal.fire('Success', 'You are logged in!', 'success');
      } else {
        swal.fire('Error', 'Invalid credentials', 'error');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        swal.fire('Error', 'Invalid credentials', 'error');
      } else {
        // Handle other errors
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='header'>Login to your account</div>
        <div>
      <input type="text" className='username'
      value={username} onChange={(e) => setUsername(e.target.value)} 
      placeholder="Username" required />
      <input type="password" value={password} className='password'
       onChange={(e) => setPassword(e.target.value)} 
       placeholder="Password" required />
    </div>
      <button type="submit" className='submit_button'>Log In</button>
      </div>
    </form>
  );
}

export default LoginPage;