import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Policy from "../pages/Policy";
import Services from "../pages/Services";
import TermsPage from "../pages/TermsPage";
import AIServices from "../pages/AIServices";
import DataCollection from "../pages/DataCollection";
import DevelopmentServices from "../pages/DevelopmentServices";
import BusinessCloudServices from "../pages/BusinessCloudServices";
import MarketingServices from "../pages/MarketingServices";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-ml" element={<AIServices />} />
        <Route path="/services/data-collection" element={<DataCollection />} />
        <Route path="/services/development" element={<DevelopmentServices />} />
        <Route path="/services/business-cloud" element={<BusinessCloudServices />} />
        <Route path="/services/marketing" element={<MarketingServices />} />
        <Route path="/product" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
