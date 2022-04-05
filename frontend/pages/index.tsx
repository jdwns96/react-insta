import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import useUser from "../swr/user";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, loading, loggedOut, mutate } = useUser();

  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      router.replace("/login");
    }
  }, [loggedOut]);

  if (loggedOut) return "redirecting...";

  return <div></div>;
};

export default Home;
