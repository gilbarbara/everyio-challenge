import { createContext, Dispatch, SetStateAction, useContext, useMemo } from 'react';
import { useLocalStorageState } from '@gilbarbara/hooks';

import { AppState, appState } from '../config';

export const StateContext = createContext({
  state: appState,
  setAppState: () => undefined,
});
StateContext.displayName = 'StateContext';

export function StateProvider(props: any) {
  const [state, setAppState] = useLocalStorageState('everyio-todos', appState);

  const value = useMemo(() => ({ state, setAppState }), [state, setAppState]);

  return <StateContext.Provider value={value} {...props} />;
}

export function useAppState(): {
  setAppState: Dispatch<SetStateAction<Partial<AppState>>>;
  state: AppState;
} {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('useAppState must be used within a StateProvider');
  }

  return context;
}
