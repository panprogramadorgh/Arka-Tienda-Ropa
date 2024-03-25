import { useContext, useEffect, useState } from "react";
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

export default function useDisableScrolling() {
  const homeMainState = useContext(HomePageContext);
  const [initialPos, setInitialPos] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll: EventListener = (event) => {
      if (initialPos === null) {
        setInitialPos(document.documentElement.scrollTop);
      } else {
        document.documentElement.scrollTop = initialPos;
      }
    };
    if (
      typeof window !== "undefined" &&
      homeMainState &&
      homeMainState[0].showMobileMenu
    ) {
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll);
    };
  }, [homeMainState]);
}
