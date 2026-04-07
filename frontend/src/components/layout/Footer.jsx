import { Link } from "react-router-dom";
import { companyInfo } from "../../data/companyData";

function Footer() {
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

      <div className="container site-footer__bottom">
        <p>Copyright {new Date().getFullYear()} {companyInfo.name}</p>
      </div>
    </footer>
  );
}

export default Footer;
