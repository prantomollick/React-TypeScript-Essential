import { createContext, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: false,
  timers: []
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimeresContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timerCtx = useContext(TimeresContext);
  if (timerCtx === null) throw new Error("Something Wen Wrong!");
  return timerCtx;
}

type TimersContextProviderProps = {
  children?: React.ReactNode;
};

export default function TimersContextProvider({
  children
}: TimersContextProviderProps) {
  const { state, dispatch } = useReducer(reducer, initialState);

  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer(TimerData: Timer) {
      // ...
    },
    startTimer() {},
    stopTimer() {}
  };

  return (
    <TimeresContext.Provider value={ctx}>{children}</TimeresContext.Provider>
  );
}
