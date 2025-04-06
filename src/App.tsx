import './App.css'
import { Sidebar } from './components/shared/Navigation/Sidebar'
import {Button} from "./components/shared/UI/Button"
function App() {

  return (
    <>
      <div className='h-screen bg-neutral-600 w-full flex items-center '>
        <Sidebar></Sidebar>
        <Button text='Submit'></Button>
      </div>
    </>
  )
}

export default App
