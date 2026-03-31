function TimelineItem({ time, title, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-time">{time}</div>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;