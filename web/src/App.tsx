import { Habit } from "./components/habit"

import './styles/global.css'

function App() {
  return (
    <div>
      <h1 className="bg-purple-600" >A</h1>
      <Habit completed={3} />
    </div>
  )
}

export default App
