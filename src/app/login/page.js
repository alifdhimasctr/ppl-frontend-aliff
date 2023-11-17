"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.login("Logging in with:", email, password);
  };

  return(
    <div className="
      flex bg-[url('/backgroundd-login.jpg')]
      w-full h-[100vh] align-middle justify-center">
        <div className="flex flex-col p-10 px-12 gap-2 bg-white w-[35rem] h-max self-center rounded-lg drop-shadow-md">
          <div>
            <h1 className="text-black text-md text-center">WELCOME TO</h1>
            <h1 className="text-[#1d6d6d] font-bold text-2xl text-center" >PPL BANGKIT</h1>
          </div>
          <label className="text-black text-md ">Email</label>
          <input type="email" className="bg-white text-black border-1 border-gray-300 rounded-md drop-shadow" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label className="text-black text-md">Password</label>
          <input type="password" className="bg-white text-black border-1 border-gray-300 rounded-md drop-shadow" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className="bg-[#183D3D] text-white rounded-md drop-shadow-md w-full h-10 mt-4" onClick={handleLogin}>Login</button>


        </div>
    </div>



  )

}

export default Login;