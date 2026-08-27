import { useEffect, useState } from "react";
import { getRegistrations } from "../services/registrationsService";

export function useRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [registrationCount, setRegistrationCount] = useState(0);

  useEffect(() => {
    async function loadRegistrations() {
      const data = await getRegistrations();

      setRegistrations(data);
      setRegistrationCount(data.length);
    }

    loadRegistrations();
  }, []);

  return {
    registrations,
    registrationCount,
  };
}
