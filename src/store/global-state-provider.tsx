import { createContext, useReducer, useContext, type ReactNode, type Dispatch } from "react";
import { appReducer, initialState, type AppState, type AppAction } from "./app.reducer";

type ContextValue = { state: AppState; dispatch: Dispatch<AppAction> };

export const GlobalStateContext = createContext<ContextValue | null>(null);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export function useGlobalState(): ContextValue {
  const ctx = useContext(GlobalStateContext);
  if (!ctx) throw new Error("useGlobalState must be used within GlobalStateProvider");
  return ctx;
}
