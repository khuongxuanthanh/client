import React from "react";

const addProduct = () => {
  return (
    <section className="bg-white flex">
        <div className="mx-auto">
            <main
            aria-label="Main"
            className="px-8 py-8 max-w-2xl sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 
                xl:col-span-6 border rounded-2xl"
            >
            <h1 className="text-center text-4xl text-teal-600 font-bold">
                Add product
            </h1>
            <div className="max-w-xl lg:max-w-3xl">
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="TxtTitle"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Title
                    </label>
                    <input
                    type="text"
                    id="txtTitle"
                    name="txtTitle"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="TxtPrice"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Price
                    </label>
                    <input
                    type="number"
                    id="txtPrice"
                    name="txtPrice"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="Category"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Category
                    </label>
                    <input
                    type="text"
                    id="Category"
                    name="category"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="Quantity"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Quantity
                    </label>
                    <input
                    type="text"
                    id="Quantity"
                    name="quantity"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                    text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
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
                    <label
                    htmlFor="Description"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Description
                    </label>
                    <textarea name="description" id="Description" cols="68" rows="3"></textarea>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    className="inline-block shrink-0 rounded-md border border-teal-600
                    bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent
                    hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                    >
                    Add product
                    </button>
                </div>
                </form>
            </div>
            </main>
        </div>
    </section>
  );
};

export default addProduct;
