import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Friends from './Components/Friends/Friend'
import FriendDetail from './Components/Friends/FriendDetail'
import Timeline from './Components/Timeline/Timeline'

function Home() {
  return (
    <>
      <Banner />
      <Friends />
    </>
  )
}

function FriendsPage() {
  return (
    <>
      <Friends />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/friend/:id" element={<FriendDetail />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App