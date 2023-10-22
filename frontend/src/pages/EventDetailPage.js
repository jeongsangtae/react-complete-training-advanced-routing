import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event "{params.eventId}" detail page!</h1>
    </>
  );
};

export default EventDetailPage;
