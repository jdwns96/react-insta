import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// component
import Header from "../../components/templates/header";
import Footer from "../../components/templates/footer";

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        <div className="max-w-[1024px] mx-auto p-5">
          <div>아이디</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
