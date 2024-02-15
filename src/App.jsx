import Banner from './sections/Banner/Banner'
import Topbar from './sections/Topbar/Topbar'
import Features from './sections/Features/Features'
import Tools from './sections/Tools/Tools'
import Workflow from './sections/Workflow/Workflow'
import Research from './sections/Research/Research'
import Join from './sections/Join/Join'
import Footer from './sections/Footer/Footer'

function App() {

  return (
    <div style={{fontFamily: "Roboto"}}>
      <Topbar />
      <Banner />
      <Features />
      <Tools />
      <Workflow />
      <Research />
      <Join />
      <Footer />
    </div>
  )
}

export default App
