import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      hashed_password: password,
    };
    let resultR = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    });
    resultR = await resultR.json();
    sessionStorage.setItem("resultR", JSON.stringify(resultR));
    navigate("/login");
  }

  const result = JSON.parse(sessionStorage.getItem("resultR"));
  const ErrMg = () => {
    if (result)
      if (!result.success)
        return (
          <>
            <p className="text-center text-red-600" id="errMg">
              Error: {result.message}
            </p>
          </>
        );
  };

  return (
    <section className="bg-white flex">
      <div className="mx-auto">
        <main
          aria-label="Main"
          className="px-8 py-8 max-w-lg sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 
                xl:col-span-6 border rounded-2xl"
        >
          <h1 className="text-center text-4xl text-teal-500 font-bold">
            Account Register
          </h1>
          <ErrMg />
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
                  <a href="/login" className="text-gray-700 underline">
                    Log in
                  </a>
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
