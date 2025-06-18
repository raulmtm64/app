import './Login.css'

import {login} from '../../services/users'

import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [userIdentifier, setUserIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submitLogin = async (login) => {
    login.preventDefault();

    const isEmail = emailRegex.test(userIdentifier);

    if (!userIdentifier || !password) {
      setError('Please fill in all fields');
      return;
    }

    const data = isEmail 
      ? {"email": userIdentifier, "password": password}
      : {"nick": userIdentifier, "password": password};

    try{
      const responseLogin = await axios.post("http://localhost:8000/api/users/login/", data)

      console.log('Login success:', responseLogin.data);
      setError(null)

      // PULIR --> ENVIAR A ALGUNA PAGINA
    } catch (errorLogin) {
      console.log(errorLogin)
    }
  };

  return (
    <div className="login">
      <h1 className="tituloLogin">Login</h1>
      <div className="divformLogin"> 
        <form className="formLogin" onSubmit={submitLogin}>
          <input 
            type="text" 
            placeholder="User / Email"
            className="inputLogin"
            value={userIdentifier}
            onChange={Login => setUserIdentifier(Login.target.value)}
          />
          <input 
            type="text" 
            placeholder="Password"
            className="inputLogin"
            value={password}
            onChange={Login => setPassword(Login.target.value)}
           />
          <button type="submit" className='botonLogin'>Sign in</button>
        </form>
      </div>

      {error && <p style={{color: 'red', textAlign: 'center', fontSize: '3vw'}}>{error}</p>}

      <div className="controlesLogin"> 
        <button className="botonRegister" onClick={() => navigate('/')}>
          Forgotten password?
        </button>
        <button className="botonRegister" onClick={() => navigate('/register')}>
          Sign up
        </button>
      </div>
    </div>
  );
}