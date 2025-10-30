import './Register.css'

import { useNavigate } from 'react-router-dom';

export default function Register() {
  
  const navigate = useNavigate();

  return (
    <div className="Register">
      <h1 className="tituloRegister">Register</h1>
      <div className="divformRegister"> 
        <form className="formRegister">
          <input 
            type="text" 
            placeholder="Email"
            className="inputRegister"
          />

          <input 
            type="text" 
            placeholder="User"
            className="inputRegister"
           />

          <input 
            type="text" 
            placeholder="First Name"
            className="inputRegister"
           />

           <input 
            type="text" 
            placeholder="Last Name"
            className="inputRegister"
           />

           <input 
            type="text" 
            placeholder="Password"
            className="inputRegister"
           />

           <input 
            type="text" 
            placeholder="Repeat Password"
            className="inputRegister"
           />

          <button className='botonRegister botonColumnaRegister'>Confirm</button>
        </form>
      </div>
      <div className="controlesRegister"> 
        <button className="botonRegister" onClick={() => navigate('/')}>
          Log in
        </button>
      </div>
    </div>
  );
}