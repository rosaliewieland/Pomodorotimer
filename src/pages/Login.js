import React from 'react';
import Headbar from './components/Headbar';
import LoginForm from './components/LogInForm';


const LoginPage = () => {
  return (
    
    <section id='login'>

    <Headbar></Headbar>
    <div className='center-box'>
      <LoginForm/>
    </div>
    </section>
  );
};

export default LoginPage;
