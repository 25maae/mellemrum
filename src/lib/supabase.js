const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

const headers = {
  apikey: SUPABASE_APIKEY,
  Authorization: `Bearer ${SUPABASE_APIKEY}`,
};

export { SUPABASE_URL, headers };