function SpeakerCard({ name, title, image }) {
  return (
    <div className="speaker-card">
      <div className="speaker-image">
        <img src={image} alt={name} />
      </div>

      <div className="speaker-info">
        <span className="speaker-tag">TEDxETU Speaker</span>
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SpeakerCard;