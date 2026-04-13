import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Dhriti_om.png";
import { companyInfo } from "../../data/companyData";

function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    {
      label: "Services",
      to: "/services",
      subItems: [
        { label: "AI & ML", to: "/services/ai-ml" },
        { label: "Data Collection", to: "/services/data-collection" },
        { label: "Development", to: "/services/development" },
        { label: "Business & Cloud", to: "/services/business-cloud" },
        { label: "Marketing", to: "/services/marketing" },
      ],
    },
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
            <div
              key={item.to}
              className="nav-item"
              onMouseLeave={() => item.subItems && setShowServicesDropdown(false)}
            >
              {item.subItems ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                    }
                    to={item.to}
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    {item.label}
                  </NavLink>
                  {showServicesDropdown && (
                    <div 
                      className="dropdown-menu"
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          className="dropdown-item"
                          to={subItem.to}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
