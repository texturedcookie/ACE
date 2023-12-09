import React, { createContext, useState } from "react";

const AceContext = createContext();

export const AceProvider = ({ children }) => {
   
  const [users, setUsers] = useState([
   {"id":"1",
    "name":"John Doe",
    "email":"john@example.com",
    "password":"password",
    "role":"admin",
    "studyPlans": [{"subject":"Bio",
                    "learningStyle":"visual",
                    " setsofstudyplan":[

                      {"setname":"set1",
                      "setdescription":"set1 description",
                      "settype":"colorFlashCards"},
                      ]}]
  },

 ]);


    const aceContextValue = { users};
  
    return (
      <AceContext.Provider value={aceContextValue}>
        {children}
      </AceContext.Provider>
    );
  };
  
  export default AceContext;
  