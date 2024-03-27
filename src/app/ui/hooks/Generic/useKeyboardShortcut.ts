import { useEffect, useContext } from "react";
import { HomePageContext } from "@/app/ui/contexts/HomeMain";
import useSwitchModalVisibility from "@/app/ui/hooks/HomeMainContext/useSwitchModalVisibility";

export default function useKeyboardShortcut() {
  const homePageState = useContext(HomePageContext);

  useEffect(() => {
    const checkWindow = () => typeof window !== undefined;
    const handleKeydown: EventListener = (event) => {
      if ((event as KeyboardEvent).ctrlKey && homePageState !== null) {
        // Combinacion de teclas con CTRL

        if ((event as KeyboardEvent).key === "m") {
          event.preventDefault();
          useSwitchModalVisibility(
            homePageState,
            !homePageState[0].dropdown.open
          );
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
