import Link from "next/link";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link href="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link href="/about">About</Link>
        </li>
        <li className="navigation__item">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
