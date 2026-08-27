export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

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