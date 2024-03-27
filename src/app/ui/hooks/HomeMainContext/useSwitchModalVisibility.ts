import { HomeMainContextStateI } from "@/app/ui/contexts/HomeMain";

export default function useSwitchModalVisibility(
  homeMainState: HomeMainContextStateI,
  newModalState: boolean
) {
  const [homeMainData, setHomeMainState] = homeMainState;
  const newHomeMainData = { ...homeMainData };
  newHomeMainData.dropdown.open = newModalState;
  setHomeMainState(newHomeMainData);
}
