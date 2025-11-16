import { useEffect, useState } from 'react'
import { Wrench, Notebook, Scan, Gauge } from 'lucide-react'

const icons = {
  'position-sizer': Wrench,
  'trade-journal': Notebook,
  'regime-scanner': Scan,
  default: Gauge,
}

export default function Tools() {
  const [tools, setTools] = useState([])

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/tools`).then(r => r.json()).then(setTools).catch(() => {})
  }, [])

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Mission Control Tools</h2>
        <p className="mt-2 text-slate-300">Practical utilities to enforce discipline and clarity.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t) => {
            const Icon = icons[t.id] || icons.default
            return (
              <div key={t.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <span className="ml-auto text-xs rounded bg-emerald-500/10 text-emerald-300 px-2 py-0.5 border border-emerald-500/20">{t.level}</span>
                </div>
                <p className="mt-2 text-slate-300 text-sm">{t.purpose}</p>
                <p className="mt-3 text-slate-300/90 text-sm"><span className="font-semibold">When:</span> {t.when_to_use}</p>
                {t.best_practices?.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-slate-300/90 text-sm space-y-1">
                    {t.best_practices.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
