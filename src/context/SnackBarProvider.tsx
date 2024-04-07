import React, { createContext, useContext, useReducer,useMemo } from 'react';
import { Snackbar, Alert } from '@mui/material'

type SnackbarState = {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
};

type SnackbarAction =
  | { type: 'SHOW'; message: string; severity: SnackbarState['severity'] }
  | { type: 'HIDE' };

const initialState: SnackbarState = {
  open: false,
  message: '',
  severity: 'success',
};

const snackbarReducer = (state: SnackbarState, action: SnackbarAction): SnackbarState => {
  switch (action.type) {
    case 'SHOW':
      return { open: true, message: action.message, severity: action.severity };
    case 'HIDE':
      return { ...state, open: false };
    default:
      return state;
  }
};

export const SnackbarContext = createContext<{
  state: SnackbarState;
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
  showWarning: (message: string) => void;
}>({
  state: initialState,
  showSuccess: () => undefined,
  showError: () => undefined,
  showInfo: () => undefined,
  showWarning: () => undefined,
});

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialState);

  const showSuccess = (message: string) => dispatch({ type: 'SHOW', severity: 'success', message });
  const showError = (message: string) => dispatch({ type: 'SHOW', severity: 'error', message });
  const showInfo = (message: string) => dispatch({ type: 'SHOW', severity: 'info', message });
  const showWarning = (message: string) => dispatch({ type: 'SHOW', severity: 'warning', message });
  const hide = () => dispatch({ type: 'HIDE' });

  const contextValue = useMemo(() => ({ state, showSuccess, showError, showInfo, showWarning }), [state]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar open={state.open} autoHideDuration={6000} onClose={hide}  sx={{ height: "50%" }}
   anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
   }}>
        <Alert onClose={hide} severity={state.severity}>
          {state.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackBarContext = () => {
  return useContext(SnackbarContext);
}