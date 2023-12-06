import { useEffect, useState } from "react";

type TWindowSize = [number, number];

type TReturn = {
  windowSize: TWindowSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export const useWindowSize = (): TReturn => {
  const initSize: TWindowSize = [window.innerWidth, window.innerHeight];
  const [windowSize, setWindowSize] = useState<TWindowSize>(initSize);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowSize[0] < 768;
  const isTablet = windowSize[0] >= 768 && windowSize[0] < 1024;
  const isDesktop = windowSize[0] >= 1024;

  return { windowSize, isMobile, isTablet, isDesktop };
};
