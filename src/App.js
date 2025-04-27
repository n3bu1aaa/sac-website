import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CountdownTimer from './components/CountDownTimer';
import NavBar from './components/NavBar';
import TicketPage from './pages/TicketPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
        <h1 className="text-5xl font-bold text-yellow-400 mb-8">Rubber Duck Gala Countdown</h1>
        <CountdownTimer />
        </header>
        <Routes>
          <Route path="/ticketpage" element={<TicketPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
