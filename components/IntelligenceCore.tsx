export default function IntelligenceCore() {

  return (
    <div className="space-y-4">

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">

        <p className="text-cyan-300 text-xs uppercase mb-2">

          Root Cause

        </p>

        <p className="text-sm text-zinc-200">

          Redis saturation triggered cascading API latency and database overload.

        </p>

      </div>

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">

        <p className="text-purple-300 text-xs uppercase mb-2">

          AI Recommendation

        </p>

        <p className="text-sm text-zinc-200">

          Scale Redis cluster and isolate payment traffic.

        </p>

      </div>

      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">

        <p className="text-red-300 text-xs uppercase mb-2">

          Predicted Failure Risk

        </p>

        <p className="text-4xl font-black text-red-400 animate-pulse">

          CRITICAL

        </p>

      </div>

    </div>
  );
}