import './App.css'
import { EventCard } from './components/events/EventCard'
import { Sidebar } from './components/shared/Navigation/Sidebar'
import {Button} from "./components/shared/UI/Button"
function App() {

  return (
    <>
      <div className='h-screen bg-neutral-600 w-full flex items-center '>
        <Sidebar></Sidebar>
        <div>
          <EventCard></EventCard>
          {/* <Button text='Submit'></Button> */}
        </div>
      </div>
    </>
  )
}

export default App
