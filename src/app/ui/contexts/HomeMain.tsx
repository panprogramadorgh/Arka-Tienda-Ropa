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

interface HomePageData {
  showMobileMenu: boolean;
  navLinks: {
    title: string;
    path: string;
  }[];
}
export type HomePageState = [
  HomePageData,
  Dispatch<SetStateAction<HomePageData>>
];

interface Props {
  children: ReactNode;
}

export const HomePageContext = createContext<HomePageState | null>(null);
const HomePageProvider: FC<Props> = ({ children }) => {
  const homePageState: HomePageState = useState<HomePageData>({
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

export default HomePageProvider;
