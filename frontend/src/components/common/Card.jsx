function Card({
  title,
  description,
  badge,
  mediaLabel,
  mediaTone = "blue",
  mediaImage,
  mediaAlt,
}) {
  return (
    <article className={`info-card info-card--${mediaTone}`}>
      <div className={`info-card__media ${mediaImage ? "info-card__media--image" : ""}`}>
        {mediaImage ? (
          <img
            alt={mediaAlt || mediaLabel || title}
            className="info-card__media-image"
            src={mediaImage}
          />
        ) : (
          <>
            <div className="info-card__media-grid" />
            <div className="info-card__media-orb info-card__media-orb--one" />
            <div className="info-card__media-orb info-card__media-orb--two" />
            <div className="info-card__media-lines">
              <span />
              <span />
              <span />
            </div>
          </>
        )}
        <div className="info-card__media-chip">{mediaLabel || "Image Slot"}</div>
      </div>
      {badge ? <span className="info-card__badge">{badge}</span> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </article>
  );
}

export default Card;
