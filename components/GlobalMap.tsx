export default function GlobalMap() {

  return (
    <div className="flex items-center justify-center h-full">

      <div className="relative">

        <div className="w-64 h-64 rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse">

          <div className="w-44 h-44 rounded-full border border-cyan-400/30 flex items-center justify-center">

            <div className="w-28 h-28 rounded-full bg-cyan-500/20 backdrop-blur-xl animate-pulse" />

          </div>

        </div>

        <div className="absolute top-6 left-10 w-3 h-3 bg-red-500 rounded-full animate-ping" />

        <div className="absolute bottom-10 right-8 w-3 h-3 bg-green-500 rounded-full animate-ping" />

        <div className="absolute top-24 right-0 w-3 h-3 bg-yellow-500 rounded-full animate-ping" />

      </div>

    </div>
  );
}