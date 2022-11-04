import React from "react";
import img_register from "../../assets/images/AD0521_OSULLIVAN_1.jpg";
import logo from "../../assets/images/logo.png";

const register = () => {
  return (
    <section className="bg-white flex">
        <div className="mx-auto">
            <main
            aria-label="Main"
            className="px-8 py-8 max-w-lg sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 
                xl:col-span-6 border rounded-2xl"
            >
            <h1 className="text-center text-4xl text-teal-600 font-bold">
                Account Register
            </h1>
            <div className="max-w-xl lg:max-w-3xl">
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 flex">
                    <label
                    htmlFor="FullName"
                    className="block w-32 text-sm font-medium text-gray-700"
                    >
                    Full Name
                    </label>
                    <input
                    type="text"
                    id="FullName"
                    name="full_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 flex">
                    <label
                    htmlFor="Email"
                    className="block w-32 text-sm font-medium text-gray-700"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 flex">
                    <label
                    htmlFor="Password"
                    className="block w-32 text-sm font-medium text-gray-700"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 flex">
                    <label
                    htmlFor="PasswordConfirmation"
                    className="block w-32 text-sm font-medium text-gray-700"
                    >
                    Password Confirmation
                    </label>
                    <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6">
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
                <div className="col-span-6">
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
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    className="inline-block shrink-0 rounded-md border border-teal-600
                    bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent
                    hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
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
