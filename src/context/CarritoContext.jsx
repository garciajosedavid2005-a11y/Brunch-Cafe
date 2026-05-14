import { createContext } from "react";

const CarritoContext = createContext({});

export const CarritoProvider = ({ children }) => {
  return (
    <CarritoContext.Provider value={{}}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
