import React, { createContext, useState, ReactNode } from 'react';

export type MenuContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export type MenuContextProviderProps = {
  children: ReactNode;
}

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
