import { useNavigate } from 'react-router-dom'
import Hero from './components/Hero'
import Why from './components/Why'
import Progression from './components/Progression'
import Intel from './components/Intel'
import Tools from './components/Tools'
import Footer from './components/Footer'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onPrimary={() => navigate('#launchpad')} onSecondary={() => navigate('#tools')} />
      <Why />
      <div id="launchpad"><Progression /></div>
      <Intel />
      <div id="tools"><Tools /></div>
      <Footer />
    </div>
  )
}

export default App
