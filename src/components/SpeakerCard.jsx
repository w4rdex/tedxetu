import { useState } from 'react';

function SpeakerCard({ name, title, image, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="speaker-card" onClick={toggleFlip}>
      <div className={`speaker-flip-container ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="speaker-front">
          <div className="speaker-image">
            <img src={image} alt={name} />
          </div>
          <div className="speaker-info">
            <span className="speaker-tag">TEDxETU Speaker</span>
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
        </div>
        
        {/* Back */}
        <div className="speaker-back">
          <div className="speaker-back-content">
            <h4>{name}</h4>
            <p>{description || 'Bu konuşmacı hakkında detaylı açıklama yakında eklenecek...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
