import SpeakerCard from "./SpeakerCard";
import speakersData from "../data/speakers.json";



function Speakers() {
  return (
    <section className="section dark-section fade-section" id="speakers">
      <h3>Konuşmacılar</h3>
      <p className="speakers-subtitle">Konuşmacı hakkında detaylı bilgi için resme tıklayınız</p>

      <div className="speakers-grid">
        {speakersData.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            title={speaker.title}
            image={speaker.image}
            description={speaker.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Speakers;
