import { useState, useEffect } from "react";

export default function useGetYScrollPos() {
  const [scroll, setScroll] = useState<number | null>(null);

  useEffect(() => {
    const checkWindow = (): boolean => typeof window !== "undefined";

    const handleScroll: EventListener = (event) => {
      const scrollYPos =
        window.pageYOffset || document.documentElement.scrollTop;
      return setScroll(scrollYPos);
    };

    if (checkWindow()) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (checkWindow()) window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
}
