import React, { createContext, useState, ReactNode } from 'react';

export type OverlayContextType = {
  activeOverlay: number;
  setActiveOverlay: (value: number) => void;
};

export const OverlayContext = createContext<OverlayContextType | null>(null);

export type OverlayContextProviderProps = {
  children: ReactNode;
}

export const OverlayContextProvider = ({ children }: OverlayContextProviderProps) => {
  const [activeOverlay, setActiveOverlay] = useState(0);

  return (
    <OverlayContext.Provider value={{ activeOverlay, setActiveOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}
