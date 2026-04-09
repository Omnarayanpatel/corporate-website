import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function ProductSection() {
  const { ref, isVisible } = useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);
  const previewProducts = products.map((product) => ({
    title: product.title,
    status: product.status,
    description: product.description,
    previewImage: product.previewImage,
    previewAlt: product.previewAlt,
  }));

  return (
    <section ref={ref} className={`section section--product-showcase reveal-section ${isVisible ? "is-visible" : ""}`}>
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

        <div className="product-preview-grid">
          {previewProducts.map((product, index) => (
            <article
              key={product.title}
              className={`product-preview-card ${activeIndex === index ? "is-clicked" : ""}`}
              onClick={() => {
                setActiveIndex(index);
                window.setTimeout(() => setActiveIndex(null), 650);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveIndex(index);
                  window.setTimeout(() => setActiveIndex(null), 650);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="product-preview-card__visual" aria-hidden="true">
                {product.previewImage ? (
                  <img alt={product.previewAlt || product.title} className="product-preview-card__image" src={product.previewImage} />
                ) : (
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
                )}
              </div>
              <div className="product-preview-card__top">
                <span className="product-index">0{index + 1}</span>
                <span className="product-status">{product.status}</span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>

        <div className="product-preview-cta">
          <Link className="btn" to="/products">
            Explore Full Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
