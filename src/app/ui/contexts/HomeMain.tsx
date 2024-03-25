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
    navLinks: [
      {
        title: "Coleccion",
        path: "/coleccion",
      },
      {
        title: "Accesorios",
        path: "/accesorios",
      },
      {
        title: "Outfits",
        path: "/outfits",
      },
    ],
  });
  return (
    <HomePageContext.Provider value={homePageState}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContextProvider;
