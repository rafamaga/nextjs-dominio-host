import Link from "next/link";

export default function Home() {
  const domain = window.location.hostname;
  const host = window.location.host;
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        About
      </Link>

      <h1>Informações da Aplicação</h1>
      <p><strong>Domínio:</strong> {domain}</p>
      <p><strong>Host:</strong> {host}</p>
    </div>
  );
}
