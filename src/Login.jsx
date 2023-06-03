import React, { useState } from 'react';
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login or signup logic here
    if (isLogin) {
      // Perform login
      console.log('Performing login with email:', email, 'and password:', password);
    } else {
      // Perform signup
      console.log('Performing signup with email:', email, 'password:', password, 'and username:', username);
    }

    // Reset form fields
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className="container" >
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isLogin && (
          <React.Fragment>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </React.Fragment>
        )}

        <button type="submit" >{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button
          className="toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default Login;
