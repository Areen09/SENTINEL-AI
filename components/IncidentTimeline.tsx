const events = [
  "02:01 Deployment started",
  "02:02 Redis memory spike",
  "02:03 API latency increased",
  "02:04 Database timeout",
  "02:05 Incident detected",
];

export default function IncidentTimeline() {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl mt-6">
      
      <h2 className="text-2xl font-bold mb-4">
        Incident Timeline
      </h2>

      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-2 border-red-500 pl-4"
          >
            {event}
          </div>
        ))}
      </div>

    </div>
  );
}