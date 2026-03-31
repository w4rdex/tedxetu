import SpeakerCard from "./SpeakerCard";

function Speakers() {
  return (
    <section className="section dark-section fade-section" id="speakers">
      <h3>Konuşmacılar</h3>

      <div className="speakers-grid">
        <SpeakerCard
          name="Konuşmacı 1"
          title="Girişimci"
          image="https://picsum.photos/400/300?random=1"
        />

        <SpeakerCard
          name="Konuşmacı 2"
          title="Yapay Zeka Uzmanı"
          image="https://picsum.photos/400/300?random=2"
        />

        <SpeakerCard
          name="Konuşmacı 3"
          title="Yazar"
          image="https://picsum.photos/400/300?random=3"
        />
      </div>
    </section>
  );
}

export default Speakers;