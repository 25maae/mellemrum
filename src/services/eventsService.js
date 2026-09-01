import { SUPABASE_URL, headers } from "../lib/supabase";
const query = "select=*,venue:venues(*)";

export async function getEvents() {
  try {
    const response = await fetch(`${SUPABASE_URL}/events?order=date.asc`, {
      headers,
    });

    if (!response.ok) {
      throw new Error("Kunne ikke hente events");
    }

    return await response.json();
  } catch (error) {
    console.error("Fejl i getEvents:", error);
    return [];
  }
}

export async function getEvent(eventId) {
  try {
    const response = await fetch(`${SUPABASE_URL}/events?id=eq.${eventId}&${query}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error("Kunne ikke hente event");
    }

    const data = await response.json();

    return data[0] ?? null;
  } catch (error) {
    console.error("Fejl i getEvent:", error);
    return null;
  }
}
