import { useState, createContext } from 'react'

const defaultMenuValue = false;

type MenuContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

type MenuProviderProps = {
  children: React.ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {

  const [overlayIsOpen, setOverlayIsOpen] = useState(defaultMenuValue);

  const openOverlay = () => {
    setOverlayIsOpen(true)
  }

  const closeOverlay = () => {
    setOverlayIsOpen(false)
  }

  return (
    <MenuContext.Provider value= { overlayIsOpen } >
    { children }
    < /MenuContext.Provider>
  )
}