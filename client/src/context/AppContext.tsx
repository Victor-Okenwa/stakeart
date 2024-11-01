import { createContext, useState } from "react";

interface AppContextType {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

// Create a default context value
const defaultContextValue: AppContextType = {
  balance: 5420,
  setBalance: () => {}, // No-op function
};
// Create a Context for the theme
export const AppContext = createContext(defaultContextValue);

// Create a Provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [balance, setBalance] = useState(5000); // Default value

  return (
    <AppContext.Provider value={{ balance, setBalance }}>
      {children}
    </AppContext.Provider>
  );
};
