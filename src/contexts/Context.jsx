import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Caratinga");

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
