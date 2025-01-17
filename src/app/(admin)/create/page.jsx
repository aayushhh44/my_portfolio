"use client";
import api from "@/api";
import { createAdminAPI } from "@/api/backed-routes";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { toast } = useToast();

  const createAdmin = async (e) => {
    e.preventDefault();

    try {
      const resp = await api.post(createAdminAPI, {
        username,
        password,
      });

      if (resp.status == 201) {
        return toast({
          title: "Admin created successfully",
          description: "Successfully created an admin",
        });
      }

      return resp.data;
    } catch (err) {}
  };

  return (
    <div>
      <section className="text-black font-poppins dark:bg-[#1a1a1a] dark:text-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full  rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#d62727] md:text-2xl ">
                Create an Account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Username
                  </label>
                  <input
                    value={username}
                    // type="email"
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="admin email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    {/* <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div> */}
                    <div className="ml-3 text-sm">
                      {/* <label for="remember" className="text-gray-500 ">
                        Remember me
                      </label> */}
                    </div>
                  </div>
                  {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a> */}
                </div>
                <button
                  onClick={createAdmin}
                  className="w-full bg-[#d62727] text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create Account
                </button>
                {/* <p className="text-sm font-light ">
                  Don’t have an account yet?
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
