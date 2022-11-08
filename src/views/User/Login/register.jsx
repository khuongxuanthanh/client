import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GrFormClose } from "react-icons/gr";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errMg, setErrMg] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    if(name && email && password){
      const newUser = {
        name: name,
        email: email,
        hashed_password: password,
      };
      const result = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const resultR = await result.json();
      sessionStorage.setItem("resultR", JSON.stringify(result));

      if (resultR && resultR.success) navigate("/login");
      else {
        setErrMg(resultR.message);
        document.getElementById("errMg").innerText = (errMg);
      }
    }
    else{
      document.getElementById("errMg").innerHTML =
        "Error: Missing email and/or password!";
    }
  }

  return (
    <section className="bg-white flex">
      <div className="mx-auto relative">
        <Link
          to={"/"}
          className="absolute top-4 right-6 p-3 hover:bg-teal-500 shadow-md rounded-md"
        >
          <GrFormClose />
        </Link>
        <main
          aria-label="Main"
          className="px-8 py-8 max-w-lg sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 
                xl:col-span-6 border rounded-2xl"
        >
          <h1 className="text-center text-4xl text-teal-500 font-bold">
            Account Register
          </h1>
          <p className="text-center text-red-600">
            <span id="errMg">{errMg}</span>
          </p>
          <div className="max-w-xl lg:max-w-3xl">
            <form
              action="/login"
              onSubmit={register}
              className="mt-8 grid grid-cols-6 gap-2"
            >
              <div className="col-span-6 flex">
                <label className="block my-auto w-32 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 flex">
                <label className="block my-auto w-32 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 flex">
                <label className="block my-auto w-32 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 flex">
                <label className="block my-auto w-32 text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 text-center">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />
                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>
              <div className="col-span-6 text-center">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <div className="col-span-6 sm:items-center sm:gap-4 mx-auto">
                <button
                  className="inline-block shrink-0 rounded-md border border-teal-500
                    bg-teal-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent
                    hover:text-teal-500 focus:outline-none focus:ring active:text-teal-500"
                >
                  Create an account
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default register;
