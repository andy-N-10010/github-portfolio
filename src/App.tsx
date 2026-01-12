import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'

import './App.css'


/**
 * The root component. This assembles all of the other components.
 * This component puts in the structure and content of the site.
 * params: Nothing
 * returns fully constructured component for the site to the html.
 */


//This variable contains the union between the interfaces for picture or video and kept as the mediaItem.




function App() {



  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>

    </>
  )
}

export default App
