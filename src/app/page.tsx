/* Imports */

// react & nextjs
import { FC } from "react";

// components
import MainHeader from "@/app/ui/components/MainHeader/MainHeader";
import HomeMain from "@/app/ui/components/HomeMain/HomeMain";

// libs

// utils
import HomePageProvider from "@/app/ui/contexts/HomePage"; // home page context provider

// types & interfaces

// css
import styles from "@/app/page.module.css";

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <HomePageProvider>
      <MainHeader />
      <HomeMain /> {/* main element of page */}
    </HomePageProvider>
  );
};

export default Home;
