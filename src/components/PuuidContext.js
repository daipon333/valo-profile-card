import React, { createContext, useContext } from "react";
import getAccountApi from "./getAccountApi";
import IdTag from "./IdTag";
import "../styles.css";
import Somethings from "./Somethings";

const PuuidContext = createContext({
  puuid: "",
  setPuuid: () => {},
});

const PuuidProvider = ({ children }) => {
  const [puuid, setPuuid] = React.useState();

  return;
  <PuuidContext.Provider value={{ puuid, setPuuid }}>
    <Somethings />
  </PuuidContext.Provider>;
};

const usePuuidContext = () => useContext(PuuidContext);

export { PuuidProvider, usePuuidContext };
