import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router";

export default function ContactPage() {
  usePageTitle("Kontakt");
  return (
    <>
      <header className="hero">
        <p className="eyebrow">Kontakt os</p>
        <h1>Har du spørgsmål?</h1>
        <p class="hero-copy">
          Du er altid velkommen til at skrive til os på:{" "}
          <a href="mailto:hej@mellemrum.dk" className="contact-link">
            hej@mellemrum.dk
          </a>
        </p>
        <p class="hero-copy">
          Du kan også følge med på: {" "}
          <Link to="/LinkedIn" className="contact-link">
            LinkedIn
          </Link>
        </p>
      </header>
    </>
  );
}
