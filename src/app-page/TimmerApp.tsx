import AddTimer from "../components/AddTimer";
import Header from "../components/Header";
import Timers from "../components/Timers";
import TimersContextProvider from "../store/timers-context";

const TimmerApp = () => {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
};

export default TimmerApp;
