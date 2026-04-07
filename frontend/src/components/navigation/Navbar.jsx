import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Dhriti_om.png";
import { companyInfo } from "../../data/companyData";

function Navbar() {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="site-nav">
      <div className="container site-nav__inner">
        <NavLink className="brand" to="/">
          <img alt={companyInfo.shortName} className="brand__logo" src={logo} />
          <div>
            <span className="brand__name">{companyInfo.shortName}</span>
            <span className="brand__tag">{companyInfo.tagline}</span>
          </div>
        </NavLink>

        <div className="site-nav__links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
