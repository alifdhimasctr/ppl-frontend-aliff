"use client";
import { IoChevronBack } from "react-icons/io5";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.login("Logging in with:", email, password);
  };

  return (
    <div
      className="
      bg-[#183D3D]
      w-full h-[100vh] flex"
    >
      <div className="flex flex-col p-10 px-12 gap-2 w-[35rem] mx-auto my-auto h-max self-center rounded-lg drop-shadow-md">
        <div className="judul mb-7">
          <h1 className="text-[36px] font-bold">
            SISTEM INFORMASI AKADEMIK{" "}
            <span className="bg-white px-3 py-1 rounded text-[#183D3D]">
              {" "}
              BANGKIT
            </span>
          </h1>
          <p>
            Selamat datang di sistem informasi akademik Bangkit, silahkan masuk
            untuk melanjutkan
          </p>
        </div>
        <label className="text-white text-md">Email</label>
        <input
          type="email"
          className="bg-white text-black border-1 border-gray-300 rounded-md drop-shadow"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-white text-md">Password</label>
        <input
          type="password"
          className="bg-white text-black border-1 border-gray-300 rounded-md drop-shadow"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border-2 hover:text-gray-500 border-white hover:border-slate-500 text-white rounded-md drop-shadow-md w-full h-10 mt-4"
          onClick={handleLogin}
        >
          Login
        </button>
        <Link href="/">
          <div className="flex mt-5">
            <IoChevronBack className="mt-1" />
            <p>Back Home</p>
          </div>
        </Link>
      </div>

      <div className="animation mx-auto my-auto">
        <img src="login-vec.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
