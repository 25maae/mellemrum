import { usePageTitle } from "../hooks/usePageTitle";

export default function ContactPage() {
  usePageTitle("Kontakt");
  return (
    <>
      <header className="hero">
        <p className="eyebrow">Kontakt os</p>
        <h1>
          Har du spørgsmål?
        </h1>
        <p class="hero-copy"></p>
        <p>
          Du er altid velkommen til at skrive til os på:{" "}
          <a href="mailto:hej@mellemrum.dk">hej@mellemrum.dk</a>.
        </p>
      </header>
    </>
  );
}
