import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// lib
import axios from "axios";
import useSWR from "swr";
import useUser from "../../swr/user";

// component
import Header from "../../components/templates/header";
import Footer from "../../components/templates/footer";
import { useEffect, useState } from "react";

const Login: NextPage = () => {
  const router = useRouter();
  const { user, mutate, loggedOut } = useUser();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user && !loggedOut) {
      router.replace("/");
    }
  }, [user, loggedOut]);

  // state
  const [form, setForm] = useState({
    user_id: "",
    password: "",
  });

  // event
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    try {
      console.log("로그인");
      e.stopPropagation();
      e.preventDefault();
      const { user_id, password } = form;

      const result = await axios.post("http://localhost:8080/api/user/login", {
        ...form,
      });
      mutate(); // 유저 swr 실행
    } catch (e) {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-1 ">
          <div
            className="max-w-md w-full space-y-8 bg-white p-8 border-gray-500"
            style={{
              border: "1px solid gray",
            }}
          >
            <div>
              {/* <Image
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
            layout="fill"
          /> */}
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm ">
                <div className="mb-3">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="user_id"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="아이디"
                    value={form.user_id}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  로그인
                </button>
              </div>
              <div>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md   border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    router.push("/join");
                  }}
                >
                  회원 가입
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
