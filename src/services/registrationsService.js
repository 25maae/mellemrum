const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
};

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
