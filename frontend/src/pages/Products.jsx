import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function Products() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const cardsReveal = useRevealOnScroll();
  const roadmapReveal = useRevealOnScroll();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className="page-shell">
      <section ref={heroReveal.ref} className={`page-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}>
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Products built for teams that need real operational systems.</h1>
          <p className="lead">
            Dhritii.ai products are designed to simplify annotation, customer management, and workforce operations with practical workflows.
          </p>
        </div>
      </section>

      <section ref={cardsReveal.ref} className={`section reveal-section ${cardsReveal.isVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="product-demo-card">
            <div className="product-demo-card__content">
              <p className="eyebrow">Video Demo</p>
              <h2>Product walkthrough video slot</h2>
              <p>
                This area is ready for your product demo video. Once you share the file path, we can drop the actual video here and keep the same layout.
              </p>
            </div>
            <div className="product-demo-stage" aria-hidden="true">
              <div className="product-window">
                <div className="product-window__chrome">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="product-window__body product-window__body--video">
                  <div className="product-window__video-badge">Demo Video</div>
                  <div className="product-window__video-play">▶</div>
                  <div className="product-window__video-line" />
                  <div className="product-window__video-line product-window__video-line--wide" />
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-grid">
            {products.map((product, index) => (
              <article
                key={product.title}
                className={`product-detail-card ${activeIndex === index ? "is-clicked" : ""}`}
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
                <div className="product-detail-card__visual">
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
                </div>

                <div className="product-detail-card__content">
                  <div className="product-showcase-card__top">
                    <span className="product-index">0{index + 1}</span>
                    <span className="product-status">{product.status}</span>
                  </div>
                  <h2>{product.title}</h2>
                  <p className="lead">{product.overview}</p>
                  <p>{product.description}</p>

                  <div className="product-detail-card__chips">
                    {product.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>

                  <div className="product-detail-card__split">
                    <div>
                      <p className="eyebrow">Use Cases</p>
                      <ul>
                        {product.useCases.map((useCase) => (
                          <li key={useCase}>{useCase}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">Outcome</p>
                      <p>{product.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={roadmapReveal.ref} className={`section section--accent reveal-section ${roadmapReveal.isVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2>Want product details, demos, or rollout planning?</h2>
            </div>
            <p>
              We can walk you through the right product for your workflow and show how it fits into your operations.
            </p>
          </div>
          <div className="product-roadmap">
            <Link className="btn" to="/contact">
              Talk to Us
            </Link>
            <Link className="btn btn--secondary" to="/services">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
