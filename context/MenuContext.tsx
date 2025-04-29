import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext<{
  isVisible: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}>({
  isVisible: false,
  openMenu: () => {},
  closeMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => setIsVisible(true);
  const closeMenu = () => setIsVisible(false);

  return (
    <MenuContext.Provider value={{ isVisible, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
