import { createContext, useReducer } from "react";

export type Timer = {
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

export const TimeresContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children?: React.ReactNode;
};

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === "START_TIMERS") {
    return { ...state, isRunning: true };
  }

  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false
    };
  }

  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [...state.timers, action.payload]
    };
  }

  return state;
}

export default function TimersContextProvider({
  children
}: TimersContextProviderProps) {
  //When dispatch is called this reducer function job is to produce new state according to new dispatch action
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer(timerData: Timer) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimer() {
      dispatch({ type: "STOP_TIMERS" });
    }
  };

  return (
    <TimeresContext.Provider value={ctx}>{children}</TimeresContext.Provider>
  );
}
