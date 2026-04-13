import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Friends from './Components/Friends/Friend'

function Home() {
  return (
    <>
      <Banner />
      <Friends />
      <Footer />
    </>
  )
}

function FriendsPage() {
  return (
    <>
      <Friends />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<FriendsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App