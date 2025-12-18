import './Register.css'

import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';


export default function Register() {
  
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: ""
  });

  const [errorDetails, setErrorDetails] = useState('');
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submitRegister = async (register) => {
    register.preventDefault();

    const newErrors = {};

    if (emailRegex.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (formData.username.trim().length < 3) {
      newErrors.username = "El usuario debe tener al menos 3 caracteres";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "El nombre es obligatorio";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es obligatorio";
    }

    if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Las contraseñas no coinciden";
    }

    try{
      const responseLogin = await axios.post("http://localhost:8000/api/users/login/", data)

      console.log('Login success:', responseLogin.data);
      setError(null)

    } catch (errorLogin) {
      console.log(errorLogin)
    }
  };


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