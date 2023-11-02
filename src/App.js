// Import everything needed to use the `useQuery` hook
import DisplayLocations from'./pages/DisplayLocations'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/Details'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayLocations />} />
        <Route path="/about" element={<Details />} />
      </Routes>
    </Router>
  )
}

