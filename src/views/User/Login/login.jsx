import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { GrFormClose } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import logoFa from "../../../assets/images/logo_facebook.png";
import logoGit from "../../../assets/images/logo_github.png";
import logoGo from "../../../assets/images/Google__G__Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMg, setErrMg] = useState("");
  let navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    if (email && password) {
      const item = { email, password };
      const result = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      const loginOk = await result.json();
      localStorage.setItem("loginOk", JSON.stringify(loginOk));

      if (loginOk && loginOk.user.role == 1) navigate("/admin");
      else if (loginOk && loginOk.success) navigate("/");
      else {
        const result = JSON.parse(localStorage.getItem("loginOk"));
        setErrMg(result.message);
        document.getElementById("errMg").innerText = errMg;
      }
      // useEffect(() => {}, []);
    } else {
      document.getElementById("errMg").innerText =
        "Error: Missing email and/or password!";
    }
  }

  const Logout = () => {
    localStorage.removeItem("result");
  };

  const google = () => {
    window.open("http://localhost:5173/login-google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5173/login-github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5173/login-facebook", "_self");
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-sm relative">
        <Link
          to={"/"}
          className="absolute top-4 right-6 p-3 hover:bg-teal-500 shadow-md rounded-md"
        >
          <GrFormClose />
          <Logout />
        </Link>
        <form
          action="/"
          // onSubmit={login}
          method="post"
          className=" mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            Login
          </h1>
          <p className="text-center text-red-600">
            <span id="errMg">{errMg}</span>
          </p>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-gray-200 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                @
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <FaEye />
              </span>
            </div>
          </div>
          <p className="text-center">or</p>
          <div className="flex justify-between px-10">
            <div className="hover:cursor-pointer" onClick={facebook}>
              <img className="h-8" src={logoFa} alt="" />
            </div>
            <div className="hover:cursor-pointer" onClick={google}>
              {/* <google/> */}
              <img className="h-8" src={logoGo} alt="" />
            </div>
            <div className="hover:cursor-pointer" onClick={github}>
              <img className="h-8" src={logoGit} alt="" />
            </div>
          </div>
          <button
            type="submit"
            onClick={login}
            className="block w-full rounded-lg hover:opacity-75 bg-teal-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
          <p className="text-center text-sm text-gray-500">
            No account?
            <Link className="underline" to="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
