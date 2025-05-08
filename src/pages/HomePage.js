import CountdownTimer from '../components/HomeComponents/CountDownTimer';
import { useNavigate } from "react-router-dom";
import IntroSection from '../components/HomeComponents/IntroSection';
import GradientText from '../components/Animations/GradientText';

function HomePage() {
    const navigate = useNavigate();

    return (
        <header className="App-header">
            <IntroSection />
            <div className="w-full max-w-3xl p-8 bg-gray-300 rounded-lg shadow-lg bg-opacity-20 mb-8 hover:scale-105 transition-transform duration-300">
              <GradientText
                colors={["#26cc88", "#2f5ccc", "#26cc88", "#2f5ccc", "#26cc88"]}
                animationSpeed={3}
                showBorder={false}
                className="text-5xl font-extrabold text-black mb-8"
              >
                The Rubber Duck Gala Starts In
              </GradientText>
              <div className="flex justify-center">
                <CountdownTimer />
              </div>
              <button
                onClick={() => navigate("/ticketpage")}
                className="w-auto bg-gradient-to-r font-bold from-yellow-400 to-yellow-500 text-black py-3 px-8 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 mt-12 mb-12"
              >
                Tickets &rarr;
              </button>
            </div>
        </header>
    )
}

export default HomePage;