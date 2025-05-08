import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import TicketPage from './pages/TicketPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/ticketpage" element={<TicketPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
