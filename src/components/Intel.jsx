import { useEffect, useState } from 'react'

export default function Intel() {
  const [news, setNews] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/news`)
      .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
      .then(setNews)
      .catch(() => setError('Unable to fetch news right now.'))
  }, [])

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Live Intel</h2>
            <p className="mt-2 text-slate-300">Clean summaries, short vs long-term scenarios.</p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {error && (
            <div className="col-span-full rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-200 text-sm">{error}</div>
          )}
          {news.map((n) => (
            <article key={n.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-slate-300/80">Timeframe: {n.timeframe}</div>
              <h3 className="mt-1 text-lg font-semibold">{n.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{n.summary}</p>
              {n.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {n.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{t}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
