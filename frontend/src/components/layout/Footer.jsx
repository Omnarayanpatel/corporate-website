import { Link } from "react-router-dom";
import { companyInfo } from "../../data/companyData";

function Footer() {
  const footerSocialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/dhritii-ai/",
      brand: "linkedin",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 19 18.5H5A1.5 1.5 0 0 1 3.5 17V7A1.5 1.5 0 0 1 5 5.5Z" />
          <path d="M8 10v5M8 8.3v.2" />
          <path d="M11 15v-2.8c0-1.1.7-2.2 2-2.2s2 1 2 2.3V15" />
          <path d="M15 12.3V15" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      brand: "instagram",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="5" width="14" height="14" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="16.5" cy="7.5" r="1" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      brand: "youtube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 8.5s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C15.2 5 12 5 12 5s-3.2 0-6.1.3c-.4.1-1.3.1-2.1 1C3.2 7 3 8.5 3 8.5S2.8 10 2.8 11.5v1c0 1.5.2 3 .2 3s.2 1.5.8 2.2c.8.9 1.8.8 2.3 1 1.7.2 6 .3 6 .3s3.2 0 6.1-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.5.2-3v-1c0-1.5-.2-3-.2-3Z" />
          <path d="m10.2 9.7 4.7 2.8-4.7 2.8Z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      brand: "facebook",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8.5h2.2V6.1c-.4 0-1.7-.1-2.3-.1-1.5 0-2.6.9-2.6 2.8V11H9.2v2.7h2.1V19h2.8v-5.3h2.3L16.9 11h-2.8V9.3c0-.5.2-.8.7-.8Z" />
        </svg>
      ),
    },
    {
      label: "X",
      brand: "x",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.5 6h3.4l4 5.6L17.3 6h1.2l-5.7 7.2L19 18h-3.4l-4.4-6.1L7 18H5.8l5.9-7.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="eyebrow">Dhritii.ai Pvt. Ltd.</p>
          <h3>{companyInfo.tagline}</h3>
          <p>{companyInfo.description}</p>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <p>{companyInfo.address}</p>
          <p>Email: {companyInfo.email}</p>
          <p>Phone: {companyInfo.phone}</p>
          <div className="footer-social" aria-label="Social links">
            {footerSocialLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  className={`footer-social__link footer-social__link--${item.brand}`}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ) : (
                <span
                  key={item.label}
                  className={`footer-social__link footer-social__link--${item.brand} footer-social__link--static`}
                  aria-label={item.label}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
              )
            )}
          </div>
          <Link className="footer-cta" to="/contact">
            Start a Project
          </Link>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__divider" aria-hidden="true" />
      </div>

      <div className="container site-footer__bottom">
        <p>
          Copyright {new Date().getFullYear()} {companyInfo.name}
        </p>
        <div className="site-footer__policies">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">•</span>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
