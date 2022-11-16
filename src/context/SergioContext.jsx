import React from "react";
import { createContext, useState } from "react";
import sergio from "../data/sergio";

const SergioContext = createContext();

export const SergioProvider = ({ children }) => {
  const [serInfo, setSerInfo] = useState(sergio);

  return (
    <SergioContext.Provider value={{ serInfo }}>
      {children}
    </SergioContext.Provider>
  );
};

export default SergioContext;
