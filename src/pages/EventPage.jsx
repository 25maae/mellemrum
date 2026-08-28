import { useState } from "react";
import { Link, useParams } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { useEvents } from "../hooks/useEvents";

export default function EventPage() {
  const { eventId } = useParams();
  const { event } = useEvents(eventId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  usePageTitle(event?.title || "Event");

  async function handleSubmit(eventSubmit) {
    eventSubmit.preventDefault();
    console.log({ name, email, event: event.title });
  }

  if (!event) {
    return null;
  }

  const date = new Date(event.date);

  return (
    <>
      <main className="event-page">
        <Link className="back-link" to="/">
          ← Alle events
        </Link>

        <section className="event-detail">
          <img src={event.image} alt="" />
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
                  {event.venueName}
                  <br />
                  {event.venueAddress}, {event.venuePostalCode}{" "}
                  {event.venueCity}
                  {event.venueWebsite && (
                    <>
                      <br />
                      <a href={event.venueWebsite}>Besøg venue</a>
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
            
            <button type="submit">Tilmeld mig</button>
          </form>
        </section>
      </main>
    </>
  );
}
