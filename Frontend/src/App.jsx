
import './index.css'
import GroupPage from './pages/GroupPage.jsx'


function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-blue-600">
          Choose your group
      </h1>
      <GroupPage />
    </>
  )
}

export default App
