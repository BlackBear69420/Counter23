import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();


  const handleLogin = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhVUSovOWoehy0HpY4xkoX1jpnMGTXAj4', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error.message);
        } else {
          setError('');
          // Login successful, you can handle the logged-in user here
          alert("Done");
          history('/count', {state: {name: data.email}});
          
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      <br/><br/>
      <Link to={"/"}>want to sign up</Link>
    </div>
  );
};

export default Login;
