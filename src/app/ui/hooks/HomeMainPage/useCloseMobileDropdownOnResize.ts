import { useEffect, Context, useContext } from "react";
import useGetWindowSize from "@/app/ui/hooks/Generic/useGetWindowSize";
import type { HomePageState } from "@/app/ui/contexts/HomeMain";

function useCloseMobileDropdownOnResize(
  HomePageContext: Context<HomePageState | null>
): void {
  const windowSize = useGetWindowSize()!;
  const homePageState = useContext(HomePageContext);

  useEffect(() => {
    if (homePageState !== null && windowSize !== null) {
      const [homePageData, setHomePageData] = homePageState;
      if (windowSize.width > 950) {
        setHomePageData({
          showMobileMenu: false,
          navLinks: homePageData.navLinks,
        });
      }
    }
  }, [windowSize]);
}

export default useCloseMobileDropdownOnResize;
