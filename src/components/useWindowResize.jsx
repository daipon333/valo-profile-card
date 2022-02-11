import { useCallback, useEffect, useState } from "react";

const useWindowResize = () => {
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setScreenWidth(true);
    }
    resizeEvent();
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setScreenWidth(false);
      } else {
        setScreenWidth(true);
      }
    });
  }, [screenWidth]);
  return [screenWidth, setScreenWidth];
};

export default useWindowResize;
