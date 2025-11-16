import { Rocket } from 'lucide-react'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-800" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Mission Control Online
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
          Trade with discipline. Learn with clarity. <span className="text-emerald-400">Launch with ROQET.</span>
        </h1>
        <p className="mt-6 text-slate-300/90 max-w-2xl mx-auto">
          A mission-ready hub for courses, market intel, and tactical tools — designed for serious beginners and focused operators.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onPrimary} className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 px-5 py-3 text-slate-900 font-semibold transition">
            <Rocket className="h-5 w-5" /> Enter Launchpad
          </button>
          <button onClick={onSecondary} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-white transition">
            View Mission Tools
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  )
}
