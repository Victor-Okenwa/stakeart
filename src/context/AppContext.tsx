import { createContext, useContext, useState } from "react";

interface AppContextType {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a default context value
const defaultContextValue: AppContextType = {
  balance: 5420,
  setBalance: () => {},
  isAuth: false,
  setIsAuth: () => {},
};
// Create a Context for the theme
export const AppContext = createContext(defaultContextValue);

// Create a Provider component
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [balance, setBalance] = useState(0); // Default value
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider value={{ balance, setBalance, isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
