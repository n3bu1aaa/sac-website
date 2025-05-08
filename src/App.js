import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import TicketPage from './pages/TicketPage';
import HomePage from './pages/HomePage';
import TextCursor from './components/Animations/TextCursor';

function App() {
  return (
    <Router>
      <TextCursor
        text="Hello!"
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/ticketpage" element={<TicketPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
