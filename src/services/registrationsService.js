import { SUPABASE_URL, headers } from "../lib/supabase";

export async function getRegistrations() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/registrations?order=createdAt.desc`,
      { headers },
    );

    if (!response.ok) {
      throw new Error("Kunne ikke hente tilmeldinger");
    }

    return await response.json();
  } catch (error) {
    console.error("Fejl i getRegistrations:", error);
    return [];
  }
}
