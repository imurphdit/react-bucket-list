import './App.css'
import List from './components/List.jsx'

function App() {
  
  const items = [
    {id: 1, name: "Snowboarding"},
    {id: 2, name: "Write a hit record"},
    {id: 3, name: "Write a hit record"},
    {id: 4, name: "Write a hit record"},
    {id: 5, name: "Write a hit record"},
    {id: 6, name: "Write a hit recordhit recordhit recordhit recordhit recordhit recordhit record"},
  ]

  const people = [
    {id: 1, name: "Mason"},
    {id: 2, name: "Jake"},
  ]
  return (
    <>
      <div className="flex-box">
        <div className='bucket-list'>
          <List items={items} title="Bucket List"/>
        </div>
        <div className="scoreboard">
          <List items={people} title="Scoreboard"/>
        </div>
      </div>
    </>
  )
}

export default App
