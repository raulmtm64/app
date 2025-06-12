import './Login.css'

import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="login">
      <h1 className="tituloLogin">Login</h1>
      <div className="divformLogin"> 
        <form className="formLogin">
          <input 
            type="text" 
            placeholder="User / Email"
            className="inputLogin"
          />
          <input 
            type="text" 
            placeholder="Password"
            className="inputLogin"
           />
          <button className='botonLogin'>Sign in</button>
        </form>
      </div>
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