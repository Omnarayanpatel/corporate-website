import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function Products() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const spotlightReveal = useRevealOnScroll();
  const cardsReveal = useRevealOnScroll();
  const roadmapReveal = useRevealOnScroll();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const activeProduct = products[selectedIndex];

  const productCounts = {
    live: products.filter((product) => product.status === "Live Product").length,
    comingSoon: products.filter((product) => product.status !== "Live Product").length,
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setClickedIndex(index);
    window.setTimeout(() => setClickedIndex(null), 650);
  };

  return (
    <main className="page-shell">
      <section ref={heroReveal.ref} className={`page-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}>
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Products built for teams that need real operational systems.</h1>
          <p className="lead">
            Dhritii.ai products are designed to simplify annotation, customer management, and workforce operations with practical workflows.
          </p>
          <div className="product-hero-stats">
            <div className="product-hero-stat">
              <strong>{products.length}</strong>
              <span>Total Products</span>
            </div>
            <div className="product-hero-stat">
              <strong>{productCounts.live}</strong>
              <span>Live Products</span>
            </div>
            <div className="product-hero-stat">
              <strong>{productCounts.comingSoon}</strong>
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={spotlightReveal.ref}
        className={`section reveal-section product-spotlight-section ${spotlightReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Product Spotlight</p>
              <h2>Pick a product to preview the right workflow.</h2>
            </div>
            <p>Use this space to quickly compare what each platform does before you go deeper into the details below.</p>
          </div>

          <div className="product-spotlight">
            <div className="product-spotlight__tabs" role="tablist" aria-label="Products">
              {products.map((product, index) => (
                <button
                  key={product.title}
                  type="button"
                  className={`product-spotlight__tab ${selectedIndex === index ? "is-active" : ""}`}
                  onClick={() => handleSelect(index)}
                  role="tab"
                  aria-selected={selectedIndex === index}
                >
                  <span>{`0${index + 1}`}</span>
                  <strong>{product.title}</strong>
                </button>
              ))}
            </div>

            <article className={`product-spotlight__panel ${clickedIndex === selectedIndex ? "is-clicked" : ""}`}>
              <div className="product-spotlight__visual">
                <img
                  src={activeProduct.previewImage}
                  alt={activeProduct.previewAlt}
                  className="product-spotlight__image"
                />
                <div className="product-spotlight__badge">{activeProduct.status}</div>
              </div>

              <div className="product-spotlight__content">
                <div className="product-showcase-card__top">
                  <span className="product-index">{`0${selectedIndex + 1}`}</span>
                  <span className="product-status">{activeProduct.status}</span>
                </div>
                <h2>{activeProduct.title}</h2>
                <p className="lead">{activeProduct.overview}</p>
                <p>{activeProduct.description}</p>

                <div className="product-detail-card__chips">
                  {activeProduct.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <div className="product-spotlight__split">
                  <div>
                    <p className="eyebrow">Use Cases</p>
                    <ul>
                      {activeProduct.useCases.map((useCase) => (
                        <li key={useCase}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">Outcome</p>
                    <p>{activeProduct.outcome}</p>
                  </div>
                </div>

                <div className="product-spotlight__actions">
                  <Link className="btn" to="/contact">
                    Request Demo
                  </Link>
                  <Link className="btn btn--secondary" to="/services">
                    See Services
                  </Link>
                </div>
              </div>
            </article>
          </div>
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
                className={`product-detail-card ${clickedIndex === index ? "is-clicked" : ""}`}
                onClick={() => handleSelect(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleSelect(index);
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
