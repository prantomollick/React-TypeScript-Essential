import type { Timer } from "../store/timers-context";
import Container from "./ui/Container";

type TimerProps = Timer;

function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}

export default Timer;
