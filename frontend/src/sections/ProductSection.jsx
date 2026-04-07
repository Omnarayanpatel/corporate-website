import { products } from "../data/companyData";

function ProductSection() {
  return (
    <section className="section section--product-showcase">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Products</p>
            <h2>In-house platforms built for real operational use.</h2>
          </div>
          <p>
            Our product lineup covers annotation workflows, customer management, and internal enterprise operations.
          </p>
        </div>

        <div className="product-showcase-grid">
          {products.map((product, index) => (
            <article key={product.title} className="product-showcase-card">
              <div className="product-window">
                <div className="product-window__chrome">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="product-window__body">
                  <div className="product-window__line product-window__line--strong" />
                  <div className="product-window__line" />
                  <div className="product-window__metrics">
                    <div />
                    <div />
                    <div />
                  </div>
                  <div className="product-window__chart" />
                </div>
              </div>

              <div className="product-showcase-card__content">
                <div className="product-showcase-card__top">
                  <span className="product-index">0{index + 1}</span>
                  <span className="product-status">{product.status}</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
