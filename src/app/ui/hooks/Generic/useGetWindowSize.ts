import { useEffect, useState } from "react";
import type { WindowSize } from "@/utils/types&interfaces/windowSize";

export default function useGetWindowSize() {
  const [winSize, setWinSize] = useState<WindowSize | null>(null);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWinSize({ width, height });
    };
    handleResize(); // sets initial value for state

    const checkWindow = () => {
      return typeof window !== "undefined";
    };

    if (checkWindow()) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (checkWindow()) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return winSize;
}
