import { useRegistrations } from "../hooks/useRegistrations";
import { usePageTitle } from "../hooks/usePageTitle";

export default function RegistrationsPage() {
  const { registrations, registrationCount } = useRegistrations();
  usePageTitle("Tilmeldinger");
  
  return (
    <>
      <header className="admin-header">
        <p className="eyebrow">Internt overblik</p>
        <h1>Tilmeldinger</h1>
        <p>{registrationCount} tilmeldinger i alt</p>
      </header>
      <main>
        <div className="registration-list">
          <div className="registration-row registration-labels">
            <span>Navn</span>
            <span>Event</span>
            <span>Dato</span>
            <span>Status</span>
          </div>
          {registrations.map((registration) => (
            <div className="registration-row" key={registration.id}>
              <div>
                <strong>{registration.name}</strong>
                <small>{registration.email}</small>
              </div>
              <span>{registration.eventTitle}</span>
              <span>
                {new Date(registration.eventDate).toLocaleDateString("da-DK")}
              </span>
              <span className="status">{registration.status}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
