"use client";

/* Imports */

// react & nextjs
import {
  createContext,
  ReactNode,
  FC,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// components

// libs

// utils
import navLinks from "@/utils/homeMainContextNavLinks";

// types & interfaces

// css

interface HomePageContextDataI {
  showMobileMenu: boolean;
  navLinks: {
    title: string;
    path: string;
  }[];
}
export type HomePageContextStateI = [
  HomePageContextDataI,
  Dispatch<SetStateAction<HomePageContextDataI>>
];

interface Props {
  children: ReactNode;
}

export const HomePageContext = createContext<HomePageContextStateI | null>(
  null
);
const HomePageContextProvider: FC<Props> = ({ children }) => {
  const homePageState: HomePageContextStateI = useState<HomePageContextDataI>({
    showMobileMenu: false,
    navLinks,
  });
  return (
    <HomePageContext.Provider value={homePageState}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContextProvider;
