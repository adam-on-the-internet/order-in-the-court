import gavelIcon from './assets/GAVEL-ICON.png'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={gavelIcon} className="gavel icon" alt="Gavel icon" />
      </div>
      <h1>ORDER IN THE COURT</h1>
      <ul>
        <li>CREATE game</li>
        <li>JOIN game</li>
        <li>MORE</li>
      </ul>
    </>
  )
}

export default App
