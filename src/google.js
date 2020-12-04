import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';








function App() {
const [name, setName ]= useState('');
const [email, setEmail]= useState('');
const [image, setImage]= useState('');

const responseGoogle = (response) => {
  console.log(response);
  setName(response.profileObj.name);
  setEmail(response.profileObj.email)
  setImage(response.profileObj.imageUrl)
}

const logout = (response)=>{
  console.log(response);
  setName('');
  setEmail('');
  setImage('');
}

  return (
    <div className="App">
     <h1>google login</h1>
  <h2>Welcome {name}</h2>
  <br/>
  <h2>Your Email is :{email} </h2>

  <img src={image} alt=""/>
  <br/>

     <GoogleLogin
    clientId="262546170129-9u77peh1eogvleqc4kjl79p1b8h3shlr.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={true}

    cookiePolicy={'single_host_origin'}
  />
  <br/>
   <GoogleLogout
      clientId="262546170129-9u77peh1eogvleqc4kjl79p1b8h3shlr.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
   </div>
  );
}

export default App;
