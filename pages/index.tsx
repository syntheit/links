import type { NextPage } from "next";
import Head from "next/head";
import { links } from "../constants/Links";
import Button from "../components/Button/Button";
import { SplashPageTitle } from "../constants/Text";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-6xl font-bold text-white mb-8 lg:mb-14 text-center">
        {SplashPageTitle}
      </h1>
      <div className="bg-image h-full w-full"></div>
      <div className="flex justify-center items-center flex-wrap w-3/6">
        {links.map((linkObj) => (
          <Button {...linkObj} key={linkObj.label}></Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
