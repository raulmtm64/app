import './Login.css'

export default function Login() {
  return (
    <div className="login">
      <h1 className="tituloLogin">Login</h1>
      <div className="divformLogin"> 
        <form className="formLogin">
          <input 
            type="text" 
            placeholder="Usuario"
            className="inputLogin"
          />
          <input 
            type="text" 
            placeholder="Contraseña"
            className="inputLogin"
           />
          <button className='botonLogin'>Entrar</button>
        </form>
      </div>
      <div className="controlesLogin"> 
        <button className="botonLogin">¿Has olvidado la contraseña?</button>
        <button className="botonLogin">Registrarse</button>
      </div>
    </div>
  );
}