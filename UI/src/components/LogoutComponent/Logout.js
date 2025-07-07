import './Logout.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('_id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('address');
    localStorage.removeItem('mobile');
    localStorage.removeItem('city');
    localStorage.removeItem('gender');
    localStorage.removeItem('role');
    localStorage.removeItem('info');
    localStorage.removeItem('status');
    localStorage.removeItem('token');
    navigate("/login");
  })
  return (
    <>

    </>
  )
}
export default Logout;