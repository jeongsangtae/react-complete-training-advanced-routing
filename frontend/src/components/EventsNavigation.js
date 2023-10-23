import { NavLink } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

const navLinkClass = ({ isActive }) => {
  return isActive ? classes.active : undefined;
};

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={navLinkClass} end>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={navLinkClass}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
