import Link from "next/link";

export default function DirectorioLayout({ children }) {
  return (
    <>
      <div>

        <ul className="navbar_Container">
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
