import { SUPABASE_URL, headers } from "../lib/supabase";

export async function getEvents() {
  const response = await fetch(`${SUPABASE_URL}/events?order=date.asc`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Kunne ikke hente events");
  }

  return response.json();
}

export async function getEvent(eventId) {
  const response = await fetch(`${SUPABASE_URL}/events?id=eq.${eventId}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Kunne ikke hente event");
  }

  const data = await response.json();

  return data[0];
}
