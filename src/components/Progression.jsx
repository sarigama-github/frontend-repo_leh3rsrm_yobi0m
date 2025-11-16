export default function Progression() {
  const stages = [
    { key: 'Launchpad', desc: 'Core concepts, platforms, execution basics.' },
    { key: 'Pre-Launch Checks', desc: 'Risk, psychology, planning — build the flight plan.' },
    { key: 'Ignition', desc: 'Starter strategies and first controlled live trades.' },
    { key: 'Ascent', desc: 'System-building, testing, journaling, refinement.' },
    { key: 'Orbit', desc: 'Advanced consistency, scaling, regime detection.' },
  ]

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Course Progression</h2>
        <p className="mt-2 text-slate-300">Launchpad → Orbit, step by step, no fluff.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((s, i) => (
            <div key={s.key} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-slate-300/80">Stage {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold">{s.key}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
