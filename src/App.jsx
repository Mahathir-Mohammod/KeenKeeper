import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Friends from './Components/Friends/Friend'
import FriendDetail from './Components/Friends/FriendDetail'
import Timeline from './Components/Timeline/Timeline'
import Stats from './Components/Stats/Stats'
import NotFound from './Components/NotFound/NotFound'

function Home() {
  return (
    <>
      <Banner />
      <Friends />
    </>
  )
}

function App() {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <main className="min-h-screen">
              <Outlet />
            </main>
            <Footer />
          </>
        ),
        children: [
          { index: true, element: <Home /> },
          { path: "friends", element: <Friends /> },
          { path: "friend/:id", element: <FriendDetail /> },
          { path: "timeline", element: <Timeline /> },
          { path: "stats", element: <Stats /> },
          { path: "*", element: <NotFound /> },
        ]
      }
    ])} 
  />
  );
}

export default App