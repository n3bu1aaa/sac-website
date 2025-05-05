import Table from "../components/TicketComp/Table";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/bg_image2.jpg";

function TicketPage() {
    const navigate = useNavigate();
    return (
        <div 
        style = {{ backgroundImage: `url(${bgImage})`}}
        className = "App-header bg-center min-h-screen flex flex-col justify-center items-center bg-[#e3e3e3] px-4 text-center py-20">
            <div className="w-full max-w-4xl p-20 bg-gray-800 rounded-lg shadow-lg bg-opacity-10">
                <h1 className = "font-extrabold text-black text-5xl mb-8">Buy Tickets!</h1>
                <Table />
                <button
                    onClick={() => navigate("/ticketpage")}
                    className="w-auto bg-gradient-to-r font-bold from-yellow-400 to-yellow-500 text-black py-3 px-8 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 mt-12 mb-12"
                >
                    Purchase Tickets
                </button>
            </div>
        </div>
    )
}

export default TicketPage;