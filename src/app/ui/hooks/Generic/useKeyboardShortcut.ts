import { useEffect, useContext } from "react";
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

export default function useKeyboardShortcut() {
  const homePageState = useContext(HomePageContext);

  useEffect(() => {
    const checkWindow = () => typeof window !== undefined;
    const handleKeydown: EventListener = (event) => {
      if ((event as KeyboardEvent).ctrlKey && homePageState !== null) {
        // Combinacion de teclas con CTRL

        if ((event as KeyboardEvent).key === "m") {
          event.preventDefault();
          homePageState[1]((prevState) => {
            return {
              ...prevState,
              dropdown: {
                open: !prevState.dropdown.open,
                navLinks: prevState.dropdown.navLinks,
              },
            };
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
