import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [activeAudio, setActiveAudio] = useState();

  return (
    <AppContext.Provider value={{ activeAudio, setActiveAudio }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  const { activeAudio, setActiveAudio } = useContext(AppContext);
  return { activeAudio, setActiveAudio };
}
