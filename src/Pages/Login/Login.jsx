import Lottie from 'lottie-react';
import React, { use } from 'react';
import loginLottie from '../../assets/lottie/login.json'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const {loginUser} = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state || '/';


    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email,password)

        loginUser(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(from) 
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
          <section className='bg-gray-300 text-black py-24'>
           <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
      <Lottie style={{width:'350px'}} animationData={loginLottie} loop="true"></Lottie>
    </div>
            
          <div className="card bg-gray-200 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="form">
          <label className="label">Email</label>
          <input type="email" name='email' className="input bg-gray-50" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input bg-gray-50" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
   
        <SocialLogin from ={from}></SocialLogin>
      </div>
    </div>
    </div>
    </div>
       </section>
    );
};

export default Login;