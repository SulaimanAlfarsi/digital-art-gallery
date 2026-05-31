import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/artworks", label: "Artworks" },
  { href: "/explore", label: "Explore" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-item">
          <Link href="/">Digital Art Gallery</Link>
        </div>
      </div>
      <div className="navbar-items">
        {links.map((link) => (
          <div className="navbar-item" key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
