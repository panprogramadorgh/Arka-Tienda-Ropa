"use client";

/* Imports */

// react & nextjs
import {
  createContext,
  ReactNode,
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

// components

// libs

// utils
import navLinks from "@/utils/HomeMainContext/navLinks";

// types & interfaces
import type { WindowSize } from "@/utils/types&interfaces/windowSize";
import type { ScrollPos } from "@/utils/types&interfaces/scrollPos";

// css

interface HomePageContextDataI {
  dropdown: {
    open: boolean;
    navLinks: {
      title: string;
      path: string;
    }[];
  };

  windowSize: WindowSize | null;

  scrollPos: {
    xPos: ScrollPos["xPos"] | null;
    yPos: ScrollPos["yPos"] | null;
  };
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
  // Estado que determina si el modal esta o no abierto
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Estado que almacena el tamaño de la ventana a tiempo real -------
  const [winSize, setWinSize] = useState<WindowSize | null>(null);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWinSize({ width, height });
    };

    const checkWindow = () => {
      return typeof window !== "undefined";
    };

    if (checkWindow()) {
      handleResize(); // sets initial value for state
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (checkWindow()) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Estado que almacena en tiempo real la posicion Y del scroll -------

  const [scrollYpos, setScrollYpos] = useState<number>(0);

  useEffect(() => {
    const checkWindow = (): boolean => typeof window !== "undefined";
    const checkContext = (): boolean => homePageState !== null;

    const closeModal = () => {
      if (homePageState !== null) {
        setModalOpen(false);
      }
    };
    const updateScrollPos = () => {
      const scrollYPos =
        window.pageYOffset || document.documentElement.scrollTop;
      return setScrollYpos(scrollYPos);
    };

    const handleScroll: EventListener = (event) => {
      closeModal(); // Cierra el modal cuando se hace scroll
      updateScrollPos(); // Se actualiza la posicion de scroll
    };

    if (checkWindow() && checkContext()) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (checkWindow() && checkContext())
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Objeto inicial para el estado homeMainState del contexto ---------

  const init: HomePageContextDataI = {
    dropdown: {
      open: modalOpen,
      navLinks,
    },
    windowSize: winSize,
    scrollPos: {
      yPos: scrollYpos,
      xPos: 0,
    },
  };

  const homePageState: HomePageContextStateI =
    useState<HomePageContextDataI>(init);

  useEffect(() => {
    const newHomeMainData: HomePageContextDataI = {
      dropdown: {
        open: modalOpen,
        navLinks,
      },
      windowSize: winSize,
      scrollPos: {
        yPos: scrollYpos,
        xPos: 0,
      },
    };
    homePageState[1](newHomeMainData);
  }, [scrollYpos, winSize, modalOpen]);

  return (
    <HomePageContext.Provider value={homePageState}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContextProvider;
