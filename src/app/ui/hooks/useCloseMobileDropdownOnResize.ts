import { useContext, Context, useEffect, useState } from "react";
import type { HomePageState } from "../contexts/HomePage";

export function useCloseMobileDropdownOnResize(
  HomePageContext: Context<HomePageState | null>
): void {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const homePageState: HomePageState | null = useContext(HomePageContext);

  useEffect(() => {
    function checkWindow() {
      return typeof window != "undefined";
    }
    function checkWidth() {
      if (checkWindow()) {
        return window.innerWidth;
      }
      return null;
    }
    function handleResize() {
      const newWidth = checkWidth();
      if (newWidth != null) setWindowWidth(newWidth);
    }

    handleResize(); // sets for first time the state

    if (checkWindow()) window.addEventListener("resize", handleResize);
    return () => {
      if (checkWindow()) window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (homePageState != null) {
      const [homePageData, setHomePageData] = homePageState;
      if (windowWidth > 950) {
        setHomePageData({
          showMobileMenu: false,
          navLinks: homePageData.navLinks,
        });
      }
    }
  }, [windowWidth]);
}

export default useCloseMobileDropdownOnResize;
