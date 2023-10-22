import { Link } from "react-router-dom";

const DUMMY_EVENT = [
  { id: "e1", title: "Event 1" },
  { id: "e3", title: "Event 2" },
  { id: "e3", title: "Event 3" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Event page!</h1>
      <ul>
        {DUMMY_EVENT.map((dummyEvent) => (
          <li>
            <Link key={dummyEvent.id}>{dummyEvent.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
