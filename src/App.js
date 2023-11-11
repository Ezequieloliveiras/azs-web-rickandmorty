import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListOfEpisodes from'./pages/listofepisodes/ListOfEpisodes'
import Details from './pages/details/Details'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<ListOfEpisodes />} />
      </Routes>
    </Router>
  )
}

