import { usePageTitle } from "../hooks/usePageTitle";

export default function ContactPage() {
  usePageTitle("Kontakt");
  return (
    <>
      <main className="contact-page">
        <h1>Kontakt os</h1>
        <p>
          Har du spørgsmål, forslag eller andet, er du altid velkommen til at
          kontakte os.
        </p>
        <p>
          Du kan skrive til os på{" "}
          <a href="mailto:hej@mellemrum.dk">hej@mellemrum.dk</a>.
        </p>
      </main>
    </>
  );
}
