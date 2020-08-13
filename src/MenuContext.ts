import { createContext } from 'react'

export type MenuContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MenuContext = createContext<MenuContextType | null>(null);

export const MenuContextProvider = MenuContext.Provider;
export const MenuContextConsumer = MenuContext.Consumer;
