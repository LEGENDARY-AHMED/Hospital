import { createContext, useState } from "react";

export const Navigation = createContext();

const GlobalContext = ({ children }) => {
  const [flag, setFlag] = useState(true);

  return (
    <Navigation.Provider value={{ flag, setFlag }}>
      {children}
    </Navigation.Provider>
  );
};

export default GlobalContext;
