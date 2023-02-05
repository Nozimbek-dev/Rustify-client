import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DoorLock from './components/doorLock/views/DoorLock'
import Footer from './components/views/Footer'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/views/Navbar'
import Signup from './components/views/Signup'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import 'react-toastify/dist/ReactToastify.css';
import DoorHome from './components/doorLock/DoorHome'
import Groups from './components/doorLock/Groups'

function App() {

  return (
    <div className="App mx-auto">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/raid-lock' element={<DoorHome />} />
          <Route path='/raid-lock/groups' element={<Groups />} />
        </Routes>
        {/* <DoorLock /> */}
        {/* <Footer /> */}
      </Provider>
    </div>
  )
}

export default App
