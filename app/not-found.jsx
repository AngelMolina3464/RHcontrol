import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1> ❌ 404 ❌ </h1>
      <p> 👽 Pagina No Encontrada o en Proceso de Desarollo 👽</p>
      <Link href="/">Volver al Menu</Link>
    </section>
  );
}