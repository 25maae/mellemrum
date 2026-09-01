/* import { SUPABASE_URL, headers } from "../lib/supabase";

export async function createRegistration(name, email, event) {
  if (!name || !email || !event) {
    return false;
  }

  const newRegistration = {
    name,
    email,
    status: "Ny",
    eventTitle: event.title,
    eventDate: event.date,
    eventLocation: event.venue?.name || event.venueName || "Ukendt sted",
  };

  try {
    const response = await fetch(`${SUPABASE_URL}/registrations`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegistration),
    });

    if (!response.ok) {
      throw new Error("Kunne ikke gemme tilmelding");
    }

    return true;
  } catch (error) {
    console.error("Fejl ved tilmelding:", error);
    return false;
  }
}
*/