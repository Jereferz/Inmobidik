import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [datos, setDatos]= useState({
    usuario: "",
    clave: ""
  });

  const handleInputChange = (e)=>{
    let {name, value} = e.target;
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar");
    }else{
      let res = await axios.post("http://localhost:9999/usuario/login",datos);
      console.log(res.data);
    }
  };
  return (
    <>
      <div className="container">
        <div className="card card-container">
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form onSubmit={handleSubmit} className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text" onChange={handleInputChange} value={datos.usuario} id="inputEmail" name="usuario" className="form-control" placeholder="Username" required/>
                <input type="password" onChange={handleInputChange} value={datos.clave} id="inputPassword" name="clave" className="form-control" placeholder="Password" required/>
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <a href="#" className="forgot-password">
                Forgot the password?
            </a>
        </div>
      </div>
    </>
  )
}

export default App
