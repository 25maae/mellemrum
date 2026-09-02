import { useState } from "react";
import { Link, useParams } from "react-router";
import { SUPABASE_URL, headers } from "../lib/supabase";
import { usePageTitle } from "../hooks/usePageTitle";
import { useEvents } from "../hooks/useEvents";

export default function EventPage() {
  const { eventId } = useParams();
  const { event, loading, error } = useEvents(eventId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  usePageTitle(event?.title || "Event");

  if (loading) {
    return <main className="event-page"><p>Henter event...</p></main>;
  }

  if (error || !event) {
    return <main className="event-page"><p>Event blev ikke fundet.</p></main>;
  }

  async function createRegistration() {
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !event) {
      return;
    }

    const ok = await createRegistration();

    if (ok) {
      setName("");
      setEmail("");
      setSuccessMessage("Du er nu tilmeldt!");
    } else {
      setSuccessMessage("Der opstod en fejl. Prøv igen.");
    }
  }

  const date = new Date(event.date);

  return (
    <>
      <main className="event-page">
        <Link className="back-link" to="/">
          ← Alle events
        </Link>

        <section className="event-detail">
          <img
            src={event.image}
            alt="Billede af pågældende event"
            loading="lazy"
          />
          <div className="event-detail-content">
            <p className="event-category">{event.category}</p>
            <h1>{event.title}</h1>
            <p className="lead">{event.summary}</p>
            <dl className="detail-list">
              <div>
                <dt>Dato</dt>
                <dd>
                  {date.toLocaleDateString("da-DK", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                  kl.{" "}
                  {date.toLocaleTimeString("da-DK", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </dd>
              </div>
              <div>
                <dt>Sted</dt>
                <dd>
                  {event.venue.name}
                  <br />
                  {event.venue.address}, {event.venue.postalCode}{" "}
                  {event.venue.city}
                  {event.venue.website && (
                    <>
                      <br />
                      <a href={event.venue.website}>Besøg venue</a>
                    </>
                  )}
                </dd>
              </div>
              <div>
                <dt>Pris</dt>
                <dd>{event.price === 0 ? "Gratis" : `${event.price} kr.`}</dd>
              </div>
            </dl>
            <p>{event.description}</p>
          </div>
        </section>

        <section className="signup-panel">
          <div>
            <p className="eyebrow dark">Tilmelding</p>
            <h2>Reserver din plads</h2>
            <p>
              Udfyld formularen, så sender vi din tilmelding til arrangøren.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Navn
              <input
                value={name}
                onChange={(inputEvent) => setName(inputEvent.target.value)}
                placeholder="Dit fulde navn"
              />
            </label>

            <label>
              E-mail
              <input
                type="email"
                value={email}
                onChange={(inputEvent) => setEmail(inputEvent.target.value)}
                placeholder="dig@example.com"
              />
            </label>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}

            <button type="submit">Tilmeld mig</button>
          </form>
        </section>
      </main>
    </>
  );
}
