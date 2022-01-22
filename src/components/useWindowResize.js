import React, { useCallback, useEffect, useState } from "react";

const useWindowResize = () => {
  const [screenWidth, setScreenWidrh] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setScreenWidrh(true);
    }
    resizeEvent();
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setScreenWidrh(false);
      } else {
        setScreenWidrh(true);
      }
    });
  }, [screenWidth]);
  return [screenWidth, setScreenWidrh];
};

export default useWindowResize;
