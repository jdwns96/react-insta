import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// fetch
import axios from "axios";
import useSWR from "swr";
import useUser from "../../swr/user";

// component
import Header from "../../components/templates/header";
import Footer from "../../components/templates/footer";
import Spinner from "../../components/common/Spinner";

const Login: NextPage = () => {
  const router = useRouter();
  const { user, loggedOut } = useUser();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user && !loggedOut) {
      router.replace("/");
    }
  }, [router, user, loggedOut]);

  // state
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      e.stopPropagation();
      e.preventDefault();
      const { id, password, passwordCheck, name } = form;
      if (!(password === passwordCheck))
        return alert("비밀번호가 일치하지 않습니다.");
      const result = await axios.post("http://localhost:8080/api/user/join", {
        user_id: id,
        password,
        name,
      });
      const { message, statusCode } = result.data;
      if (statusCode === 201) alert(message);
      router.push("/login");
    } catch (e: any) {
      const { error, message, statusCode } = e.response.data;
      if (statusCode === 404) alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* <div className="w-full">
        <div className="max-w-[1024px] mx-auto p-5">
          <div>아이디</div>
        </div>
      </div> */}
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-1">
          <div
            className="max-w-md w-full space-y-8 bg-white p-8 border-gray-500 "
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
                Sign up to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md ">
                <div className="mb-3">
                  <label htmlFor="id" className="sr-only">
                    id
                  </label>
                  <input
                    id="id"
                    name="id"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="아이디"
                    value={form.id}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="sr-only">
                    비밀 번호
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
                <div className="mb-3">
                  <label htmlFor="passwordCheck" className="sr-only">
                    비밀번호 확인
                  </label>
                  <input
                    id="passwordCheck"
                    name="passwordCheck"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="비밀번호 확인"
                    value={form.passwordCheck}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="sr-only">
                    이름
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md   border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  회원 가입
                </button>
              </div>
              <div>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md   border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    router.push("/login");
                  }}
                >
                  취 소
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
