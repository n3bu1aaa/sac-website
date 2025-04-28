import CountdownTimer from '../components/HomeComponents/CountDownTimer';

function HomePage() {
    return (
        <header className="App-header">
            <h1 className="text-5xl font-bold text-yellow-400 mb-8">Rubber Duck Gala Countdown</h1>
            <CountdownTimer />
        </header>
    )
}

export default HomePage;