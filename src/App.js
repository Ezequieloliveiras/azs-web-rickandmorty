import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from'./pages/Home'
import Details from './pages/details/Details'
import PaginaTeste from './PaginaTeste'

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/paginateste" element={<PaginaTeste />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

