import TimelineItem from "./TimelineItem";

function Program() {
  return (
    <section className="section fade-section" id="program">
      <h3>Program</h3>

      <div className="timeline">
        <TimelineItem
          time="10:00"
          title="Kapı Açılışı"
          description="Kayıt, karşılama ve katılımcı yerleşimi."
        />
        <TimelineItem
          time="10:30"
          title="Açılış Konuşması"
          description="TEDxETU ekibinden etkinlik açılışı."
        />
        <TimelineItem
          time="11:00"
          title="1. Oturum"
          description="İlham veren ilk konuşmacılar sahnede."
        />
        <TimelineItem
          time="12:30"
          title="Ara"
          description="Networking, kahve molası ve sosyal alan."
        />
        <TimelineItem
          time="14:00"
          title="2. Oturum"
          description="Yeni fikirler, girişimcilik ve gelecek teması."
        />
        <TimelineItem
          time="17:00"
          title="Kapanış"
          description="Teşekkür konuşması ve toplu kapanış."
        />
      </div>
    </section>
  );
}

export default Program;