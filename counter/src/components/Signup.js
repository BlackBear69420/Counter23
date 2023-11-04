import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhVUSovOWoehy0HpY4xkoX1jpnMGTXAj4', {
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
          // Registration successful, you can handle the logged-in user here
          alert("You can login to see counter");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p>{error}</p>}
      <br/><br/>
      <Link to={"/login"}>Login if old user</Link>
    </div>
  );
};

export default Signup;
