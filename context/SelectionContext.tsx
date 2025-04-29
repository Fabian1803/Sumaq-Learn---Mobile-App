// contexts/SelectionContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { Platform } from 'react-native';

type SelectionContextType = {
  selectedSchool: string | null;
  setSelectedSchool: (school: string | null) => void;
  readyToNavigate: boolean;
  setReadyToNavigate: (ready: boolean) => void;
};

const SelectionContext = createContext<SelectionContextType>({
  selectedSchool: null,
  setSelectedSchool: () => {},
  readyToNavigate: false,
  setReadyToNavigate: () => {},
});

export const useSelection = () => useContext(SelectionContext);

export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [readyToNavigate, setReadyToNavigate] = useState(false);

  const selectSchool = (schoolId: string) => {
    setSelectedSchool(schoolId);
    
    // FIX MÁGICO PARA ANDROID:
    if (Platform.OS === 'android') {
      setTimeout(() => {}, 50); // Force update
    }
  };

  return (
    <SelectionContext.Provider 
      value={{ 
        selectedSchool, 
        setSelectedSchool,
        readyToNavigate,
        setReadyToNavigate
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};