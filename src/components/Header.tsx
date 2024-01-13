import { useTimersContext } from "../store/useTimersContext";
import Button from "./ui/Button";

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
