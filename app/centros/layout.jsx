import Link from "next/link";

export default function CentroCostosLayout({ children }) {
  return (
    <>
      <div>
        <ul className="navbar_Container">
          <li>
            <Link href="/centros/addCentro">Agregar Centro de Costos</Link>
          </li>
          <li>
            <Link href="/centros/listaCentros">
              Listado de Centros de Costos
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
