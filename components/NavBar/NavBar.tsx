import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-item">
          <Link href="/">Codegrid</Link>
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
};

export default NavBar;
