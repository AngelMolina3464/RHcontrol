import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pruebita-bad82.appspot.com/o/nextJs_vercel%2F4288584andbusinessfinancepersonalportfolioprofileresume-115772_115741%20(2).ico?alt=media&token=8150774d-460f-4190-a0bf-a75aa74aa65d"
            alt="logo_keeper"
          />
          <h3>RH Control</h3>
        </div>

        <ul className="navbar_Container">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/directorio">Directorio</Link>
          </li>
          <li>
            <Link href="/centros">Centros de Costos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
