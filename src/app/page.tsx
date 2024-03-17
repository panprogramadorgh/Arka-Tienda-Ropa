/* Imports */

// react & nextjs
import { FC } from "react";

// components
import MainHeader from "@/app/ui/headers/mainpage/MainHeader";
import MainHomePage from "@/app/ui/homepage/MainHomePage";

// libs

// utils
import HomePageProvider from "@/app/ui/contexts/HomePage"; // home page context provider

// types & interfaces

// css
// import styles from "@/app/page.module.css";

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <HomePageProvider>
      <MainHeader />
      <MainHomePage />
    </HomePageProvider>
  );
};

export default Home;
