import { SUPABASE_URL, headers } from "../lib/supabase";

export async function getRegistrations() {
  const response = await fetch(
    `${SUPABASE_URL}/registrations?order=createdAt.desc`,
    { headers },
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente tilmeldinger");
  }

  return response.json();
}
