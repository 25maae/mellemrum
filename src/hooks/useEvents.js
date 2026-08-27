import { useEffect, useState } from "react";
import { getEvents, getEvent } from "../services/eventsService";

export function useEvents(eventId = null) {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        if (eventId) {
          const data = await getEvent(eventId);
          setEvent(data);
        } else {
          const data = await getEvents();
          setEvents(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, [eventId]);

  return {
    events,
    event,
    loading,
    error,
  };
}