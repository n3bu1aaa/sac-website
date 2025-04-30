import CountdownTimer from '../components/HomeComponents/CountDownTimer';
import { useNavigate } from "react-router-dom";
import IntroSection from '../components/HomeComponents/IntroSection';

function HomePage() {
    const navigate = useNavigate();

    return (
        <header className="App-header">
            <IntroSection />
            <h1 className="text-5xl font-bold text-yellow-400 mb-8">Rubber Duck Gala Countdown</h1>
            <CountdownTimer />
            <button
              onClick={() => navigate("/ticketpage")}
              className="w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-8 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 mt-12 mb-12"
            >
              Buy Tickets
            </button>
        </header>
    )
}

export default HomePage;