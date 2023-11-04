import React, { useState } from 'react';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    fetch('https://counter-42e58-default-rtdb.firebaseio.com/userSignup.json', {
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
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    fetch('https://counter-42e58-default-rtdb.firebaseio.com/userSignup.json', {
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
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Authentication;

