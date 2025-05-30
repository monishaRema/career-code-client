import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/lottie/lottie.json'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

    const {createUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

         createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })

        }
    
    return (
        <section className='bg-gray-300 text-black'>
       <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
      <Lottie style={{width:'350px'}} animationData={registerLottie} loop="true"></Lottie>
    </div>
    <div className="card bg-gray-200 w-full max-w-sm shrink-0 shadow-2xl">
         
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="form">
          <label className="label">Name</label>
          <input type="text" name='name'  className="input bg-gray-50" placeholder="Your Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input bg-gray-50" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input bg-gray-50" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
</section>
    );
};

export default Register;