import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="latar p-3 navbar navbar-expand fixed-top">
      <div className="container">
        <Link href="/">
          <a className="brand navbar-brand">
            Agung-F
          </a>
        </Link>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
