"use client";
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const login = () => {
  const[name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [login , setLogin ] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    const res = await axios.post(`/api/user/register` , {
        name,
        email,
        password
    })
    if(res?.data){
        Cookies.set("user" , res.data.token , {expires: 7})
        alert(res.data.msg);
    }
  }

  const handleToggle = async () => {
    setLogin(!login)
  }
  const handleLogin = async () => {
    const res = await axios.post('/api/user/login' , {
        email,
        password
    })
    if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
    }
  }

  return (
    <div>
        <Head>
            <title>OYO-Login !</title>
        </Head>
        <div className="flex h-screen justify-center items-center relative bg-[url('/background.avif')] bg-no-repeat bg-cover opacity-85">
            <div className=' absolute w-full top-10 px-20 flex items-center '>
                <h2 className=' text-5xl font-bold mr-5'>OYO</h2>
                <p className=' font-bold text-2xl text-white'>Hotels and homes across 800 cities, 24+ countries</p>
            </div>
            <div className=' flex justify-between items-center w-9/12'>
                <div>
                    <p className=' text-5xl font-bold text-justify text-white'>There’s a smarter way to OYO around</p>
                    <p className=' text-xl mt-5 text-justify text-white'> Sign up with your phone number and get exclusive access to
                    discounts and savings on OYO stays and with our many travel
                    partners.</p>
                </div>
                <div className=' ml-20 pb-40 w-10/12 bg-slate-50 border'>
                    <p className=' h-10 flex items-center px-10 text-lg font-bold bg-gradient-to-r from-red-300 to bg-red-600'>Sign up & Get ₹500 OYO Money</p>
                    <div className=' px-10'>
                        <h3 className=' text-4xl font-bold my-5'>Login / Signup</h3>
                        <p className=' font-bold text-lg mb-1'>
                            Please enter your phone number to continue 
                        </p>
                        {login ? (
                         ""
                        ): (
                            
                            <input
                             type="text"
                             placeholder='Enter your name...'
                             className=' outline-none border my-3 border-black px-3 py-1 w-96 h-10'
                             onChange={(e) => setName(e.target.value)}
                            />
                        )}
                        <input
                         type="text"
                         placeholder='Enter your email...'
                         className=' outline-none border my-3 border-black px-3 py-1 w-96 h-10'
                         onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                         type="text"
                         placeholder='Enter your password...'
                         className=' outline-none border my-3 border-black px-3 py-1 w-96 h-10'
                         onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                         type='submit'
                         className='w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg'
                         onClick={login ? handleLogin : handleSignup}
                        >
                            {login ? "Login" : "Sign Up"}
                        </button>
                        <p className=' my-1 text-xl'>
                            <span>
                            {login
                            ?   "Don`t have an account ?"
                            : "Already have an account ?"}
                            </span>
                            <span className=' ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer px-2'
                             onClick={handleToggle}
                            >
                            {" "}
                            {login ? "Sign Up" : "Login"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default login;
