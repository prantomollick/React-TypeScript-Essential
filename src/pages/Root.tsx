import { Outlet } from "react-router-dom";
import MainHeader from "../components/mission/navigation/MainHeader";
import SessionsContextProvider from "../store/sessions-context";

export default function Root() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
