export default function Why() {
  const points = [
    {
      title: "Clean mission-control UI",
      desc: "No noise, just signal. Calm visuals, fast navigation, zero hype.",
    },
    {
      title: "Structured learning",
      desc: "From beginner to consistent operator with a clear progression.",
    },
    {
      title: "Real-time awareness",
      desc: "News, telemetry, and tools that inform decisions — not drive them.",
    },
    {
      title: "Risk-first mindset",
      desc: "Process over outcomes. Control exposure. Respect uncertainty.",
    },
  ]
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p) => (
          <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
