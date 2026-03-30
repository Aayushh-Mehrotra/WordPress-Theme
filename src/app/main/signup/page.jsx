'use client'
import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

const signupSchema= Yup.object().shape({
 name:Yup.string().required('Name Toh Likho')
.min(3,'Too Short'),
email:Yup.string().required('Email to likh Bhai')
.email('email Not Valid'),
password:Yup.string().required('Password is Required')
.min(8,"too short")
.matches(/[A-Z/]/,'uppercase letter is required')
.matches(/[a-z/]/,'lowercase letter is required')
.matches(/[0-9/]/,'number is required')
.matches(/[A-Z/]/,'uppercase letter is required')
})

const Signup = () => {
  const signupForm=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    },
   onSubmit:async(values)=>{
      console.log(values);
      //send values to backend
    const res=  await axios.post('http://localhost:5000/user/add',values)
    console.log(res.status);
     if(res.status===200){
      toast.success('signup successful')
    }
    else{
      toast.error('signup failed')
    }
    
    }
  })
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-white text-center mb-3">
          Create Your Account
        </h1>

        <p className="text-slate-400 text-center mb-6 text-base">
          Get started with our free React-powered WordPress theme
        </p>

        {/* Form */}
        <form onSubmit={signupForm.handleSubmit} className="space-y-5">

          <div>
            <label className="block text-slate-300 mb-1">Full Name</label>
            <input id='name'
            onChange={signupForm.handleChange}
            values={signupForm.values.name}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1">Email</label>
            <input id='email'
            onChange={signupForm.handleChange}
            values={signupForm.values.email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1">Password</label>
            <input
             id='password'
            onChange={signupForm.handleChange}
            values={signupForm.values.password}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1">Confirm Password</label>
            <input
             id='confirmpassword'
            onChange={signupForm.handleChange}
            values={signupForm.values.confirmPassword}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white text-lg"
          >
            Sign Up Free
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-slate-500 mt-6">
          Free • Performance Optimized • Built with React
        </p>

      </div>
    </div>
  );
};

export default Signup;