import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

// swr
import useUser from "../swr/user";

// component
import Header from "../components/templates/header";
import Spinner from "../components/common/Spinner";
import Nav from "../components/templates/nav";

const Home = () => {
  const router = useRouter();
  const { user, loading, loggedOut, mutate } = useUser();

  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      router.replace("/login");
    }
  }, [router, loggedOut]);

  if (loggedOut) return <Spinner />;

  return (
    <>
      <Header />
      <Nav />
      <div className="w-full">
        <div className="max-w-[1024px] mx-auto">body</div>
      </div>
    </>
  );
};

export default Home;
