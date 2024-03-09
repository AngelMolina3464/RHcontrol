import Link from "next/link";
import "@/components/components_Support/navBar.css";

export default function DirectorioLayout({ children }) {
  return (
    <>
      <div>

        <ul className="subnavBar__Custom">
          <li>
            <Link href="/directorio/addPersonal">Agregar Colaborador</Link>
          </li>
          <li>
            <Link href="/directorio/listaPersonal">Lista de Colaboradores</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
