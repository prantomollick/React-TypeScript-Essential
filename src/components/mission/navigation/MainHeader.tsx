import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";
import UpcomingSessions from "../sessions/UpcomingSessions";

const MainHeader = () => {
  const [upcomingSessionVisible, setUpcomingSessionVisible] = useState(false);

  const showUpcomingSessions = () => {
    setUpcomingSessionVisible(true);
  };

  const hideUpcomingSessions = () => {
    setUpcomingSessionVisible(false);
  };

  return (
    <>
      {upcomingSessionVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
      <div id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcomming Sessions</Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
