'use client'
import { GetSigninData } from '@/lib/useraction';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [signinInfo,setSignInInfo]=useState({Email:"",Password:""})
    const [status,setStatus]=useState(false)
    const router=useRouter()


    const PostLoginInfo=()=>{
        setStatus(true)
        localStorage.setItem("SignInData",JSON.stringify(signinInfo))
        setStatus(false)
        router.push("/")
    }

    return (
        <div className="flex min-h-screen">
            <div className=" md:display w-1/2 bg-gradient-to-br from-purple-800 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Algo Tradeing</h1>
                    <p className="text-xl">Information Like Description</p>
                    <button className="mt-8 px-6 py-2 bg-red-500 rounded-full text-white font-semibold hover:bg-red-600">Company Logo</button>
                </div>
            </div>

            <div className="w-1/2 bg-white p-12 flex flex-col justify-center items-center">
                <div className="rounded-full bg-gray-200 w-24 h-24 mb-4">
                    <img src='Icons/ProfileIcon.png'/>
                </div>
                <div className="flex space-x-4 mb-6">
                    <button 
                        className={`px-4 py-2 font-semibold rounded-t-lg ${isLogin ? 'bg-gray-300' : 'bg-gray-100'} hover:bg-gray-200`} 
                        onClick={() => setIsLogin(true)}>
                        Login
                    </button>
                    <button 
                        className={`px-4 py-2 font-semibold rounded-t-lg ${!isLogin ? 'bg-gray-300' : 'bg-gray-100'} hover:bg-gray-200`} 
                        onClick={() => {setIsLogin(false); router.push("/sign-up");}}>
                        Signup
                    </button>
                </div>

                <div className="w-80 space-y-4">
                    <input
                        type="text"
                        placeholder="Username or Email Address"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e)=>setSignInInfo({...signinInfo,Email:e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e)=>setSignInInfo({...signinInfo,Password:e.target.value})}
                    />
                    <div className="flex justify-between items-center">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label>
                        <a href="#" className="text-pink-600 hover:underline">Forgot Password?</a>
                    </div>
                    <button className="w-full bg-gradient-to-br from-purple-800 to-pink-600 text-white py-2 rounded-full hover:bg-purple-700" onClick={PostLoginInfo}>{status===true?"Loading...":"Log In"}</button>
                    <p className="text-center text-gray-600">Don’t have an account? <a href="/sign-up" className="text-purple-600 underline">Register here</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
