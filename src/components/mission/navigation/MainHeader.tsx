import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const MainHeader = () => {
  return (
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
            <Button>Upcomming Sessions</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
