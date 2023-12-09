import React, { createContext, useState } from "react";

const AceContext = createContext();

export const AceProvider = ({ children }) => {
   
    const aceContextValue = {
      
    "NAME":"hi"
    };
  
    return (
      <AceContext.Provider value={aceContextValue}>
        {children}
      </AceContext.Provider>
    );
  };
  
  export default AceContext;
  