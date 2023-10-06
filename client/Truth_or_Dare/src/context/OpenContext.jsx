// OpenContext.js
import React, { createContext, useContext, useState } from 'react';

const OpenContext = createContext();

export const useOpen = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error('useOpen doit être utilisé à l\'intérieur d\'un OpenProvider');
  }
  return context;
};

export const OpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    return isOpen;
  };

  return (
    <OpenContext.Provider value={{ handleOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
};
