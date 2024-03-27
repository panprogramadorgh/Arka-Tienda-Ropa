import { useState, useEffect } from "react";
import { HomeMainContextStateI } from "@/app/ui/contexts/HomeMain";
import useSwitchModalVisibility from "@/app/ui/hooks/HomeMainContext/useSwitchModalVisibility";

export default function useGetYScrollPos(
  homePageState: HomeMainContextStateI | null
) {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const checkWindow = (): boolean => typeof window !== "undefined";
    const checkContext = (): boolean => homePageState !== null;

    const closeModal = () => {
      if (homePageState !== null) {
        useSwitchModalVisibility(homePageState, false);
      }
    };
    const updateScrollPos = () => {
      const scrollYPos =
        window.pageYOffset || document.documentElement.scrollTop;
      return setScroll(scrollYPos);
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

  return scroll;
}
