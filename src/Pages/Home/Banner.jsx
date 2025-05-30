import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.jpg"

const Banner = () => {
    return (
      <section className='container py-24'>
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
      src={team1}
      animate={{y:[100,50,100,]}}
      transition={{duration:5,repeat:Infinity}}

      className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] b shadow-2xl"
    />
    <motion.img
      src={team2}
      animate={{x:[100,50,100,]}}
      transition={{duration:10,delay:1,repeat:Infinity}}

      className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] b shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">Remote <motion.span 
      
      animate={
        {
          color:["#ca3d1f","#85872f"],
          transition:{duration:4,repeat:Infinity}
        
        }
      }
      >
        Jobs</motion.span> For You!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</section>
    );
};

export default Banner;