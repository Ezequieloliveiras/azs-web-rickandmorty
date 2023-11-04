import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from'./pages/Home'
import Details from './pages/details/Details'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  )
}

