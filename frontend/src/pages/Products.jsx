import Card from "../components/common/Card";
import { products } from "../data/companyData";

function Products() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Products built inside Dhritii.ai.</h1>
          <p className="lead">
            We are building software products that support operations, customer
            management, and workforce systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {products.map((product) => (
              <Card
                key={product.title}
                badge={product.status}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Products;
