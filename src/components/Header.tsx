import { useTimersContext } from "../store/timers-context";
import Button from "./ui/Button";

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
