import React from "react";
import { Div, Text, Container, Typography } from "neumorphism-react-design";

const Contact = () => {
  return (
    <div className="w-3/6 mx-auto">
      <form action="">
        <div className="flex gap-4">
          <div class="form-divs relative my-4 w-3/6">
            <input
              type="text"
              id="floating_outlined"
              class="form-inputs block px-2.5 pb-2.5 pt-4 w-full text-sm text-fourth bg-secondary rounded-lg appearance-none border-0 focus:outline-none focus:ring-0 focus:form-inputs peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Floating outlined
            </label>
          </div>
          <div class="form-divs relative my-4 w-3/6">
            <input
              type="text"
              id="floating_outlined"
              class="form-inputs block px-2.5 pb-2.5 pt-4 w-full text-sm text-fourth bg-secondary rounded-lg appearance-none border-0 focus:outline-none focus:ring-0 focus:form-inputs peer"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Floating outlined
            </label>
          </div>
        </div>
        <div class="form-divs relative my-4">
          <textarea
            type="text"
            id="floating_outlined"
            class="form-inputs block px-2.5 pb-2.5 pt-4 w-full text-sm text-fourth bg-secondary rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 focus:form-inputs peer"
            placeholder=" "
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Floating outlined
          </label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
