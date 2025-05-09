import Table from "../components/TicketComp/Table";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/bg_image2.jpg";
import GradientText from '../components/Animations/GradientText';

function TicketPage() {
    const navigate = useNavigate();
    return (
        <div 
        style = {{ backgroundImage: `url(${bgImage})`}}
        className = "App-header bg-center min-h-screen flex flex-col justify-center items-center bg-[#e3e3e3] px-4 text-center py-20">
            <div className="w-full max-w-4xl p-20 bg-gray-800 rounded-lg shadow-lg bg-opacity-10">
                <GradientText
                    colors={["#26cc88", "#2f5ccc", "#26cc88", "#2f5ccc", "#26cc88"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="font-extrabold text-5xl mb-8"
                >
                    Buy Tickets!
                </GradientText>
                <Table />
                <button
                    onClick={() => navigate("/ticketpage")}
                    className="w-auto bg-gradient-to-r font-bold from-amber-700 to-orange-600 text-white py-3 px-8 rounded-full shadow-md hover:from-orange-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 mt-12 mb-12"
                >
                    Purchase Tickets
                </button>
            </div>
        </div>
    )
}

export default TicketPage;