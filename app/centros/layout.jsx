import Link from "next/link";
import "@/components/components_Support/subNavBar.css"

export default function CentroCostosLayout({ children }) {
  return (
    <>
      <div>
        <ul className="subnavBar__Custom">
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
