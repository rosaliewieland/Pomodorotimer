import React from 'react';
import Headbar from './components/Headbar';

const LoginPage = () => {
  return (
    
    <section id='login'>

    <Headbar></Headbar>
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
    </section>
  );
};

export default LoginPage;
