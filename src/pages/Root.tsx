import { Outlet } from "react-router-dom";
import MainHeader from "../components/mission/navigation/MainHeader";

export default function Root() {
  return (
    <>
      <MainHeader />
      {/* Todo: Add Header */}
      <Outlet />
    </>
  );
}
