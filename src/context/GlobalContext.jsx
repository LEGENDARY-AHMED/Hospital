import { createContext, useEffect, useState } from "react";

export const Navigation = createContext();

const GlobalContext = ({ children }) => {
  const [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   console.log(`Flag has changed to: ${flag}`);
  // }, [flag]);

  return (
    <Navigation.Provider value={{ flag, setFlag }}>
      {children}
    </Navigation.Provider>
  );
};

export default GlobalContext;
