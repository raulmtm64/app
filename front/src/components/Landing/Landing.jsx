import './Landing.css'

import Login from '../Login/Login.jsx';
import LogoLanding from '../LogoLanding/LogoLanding.jsx';

export default function Landing() {

  return (
    <div className="principalLanding">
        <LogoLanding/>
        <Login/>
    </div>
  );
}