import './App.css';
import CountdownTimer from './components/CountDownTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-5xl font-bold text-yellow-400 mb-8">Rubber Duck Gala Countdown</h1>
        <CountdownTimer />
      </header>
    </div>
  );
}

export default App;
