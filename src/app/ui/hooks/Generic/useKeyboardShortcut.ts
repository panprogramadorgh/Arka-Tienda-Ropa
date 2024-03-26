import { useEffect, useContext } from "react";
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

export default function useKeyboardShortcut() {
  const homePageState = useContext(HomePageContext);

  useEffect(() => {
    const checkWindow = () => typeof window !== undefined;
    const handleKeydown: EventListener = (event) => {
      if ((event as KeyboardEvent).ctrlKey && homePageState) {
        // Combinacion de teclas con CTRL

        if ((event as KeyboardEvent).key === "m") {
          event.preventDefault();
          const [_, setHomePageState] = homePageState;
          // Invierte la visibilidad del menu
          setHomePageState({
            navLinks: homePageState[0].navLinks,
            showMobileMenu: !homePageState[0].showMobileMenu,
          });
        }

        if ((event as KeyboardEvent).key === "b") {
          event.preventDefault();
          window?.history.pushState({}, "", "/search");
          window?.history.go(0);
        }
      }
    };
    if (checkWindow()) {
      window.addEventListener("keydown", handleKeydown);
    }
    return () => {
      if (checkWindow()) {
        window.removeEventListener("keydown", handleKeydown);
      }
    };
  });
}
