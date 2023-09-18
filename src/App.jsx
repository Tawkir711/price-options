import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/priceoptions/PriceOptions'

function App() {
 

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl bg-rose-600'  >Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
