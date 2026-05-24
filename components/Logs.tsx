const logs = [
  "[2:01] Deployment started",
  "[2:02] Redis memory spike",
  "[2:03] API latency increased",
  "[2:04] Database timeout",
];

export default function Logs() {
  return (
    <div className="bg-black p-6 rounded-2xl mt-6 border border-zinc-800">
      <h2 className="text-green-400 text-xl mb-4">
        Live Logs
      </h2>

      <div className="space-y-2 font-mono text-green-500">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
}