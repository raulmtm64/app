import './Landing.css'

import { Routes, Route } from 'react-router-dom';

import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import LogoLanding from '../LogoLanding/LogoLanding.jsx';

export default function Landing() {

  return (
    <div className="principalLanding">
        <LogoLanding/>
        <div className='usuarioLanding'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
    </div>
  );
}