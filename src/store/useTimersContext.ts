import { useContext } from "react";
import { TimeresContext } from "./timers-context";

export function useTimersContext() {
  const timerCtx = useContext(TimeresContext);
  if (timerCtx === null) throw new Error("Something Wen Wrong!");
  return timerCtx;
}
