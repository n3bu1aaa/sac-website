import Countdown from 'react-countdown';

const CountdownTimer = () => {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
          return <span className="text-4xl font-bold text-yellow-400">The Gala Has Started!</span>;
        } else {
          return (
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-6xl font-bold text-yellow-400">{days+2}</div>
                <div className="text-lg text-white">days</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-yellow-400">{hours}</div>
                <div className="text-lg text-white">hours</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-yellow-400">{minutes}</div>
                <div className="text-lg text-white">minutes</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-yellow-400">{seconds}</div>
                <div className="text-lg text-white">seconds</div>
              </div>
            </div>
          )
        }
      }
    return (
        <Countdown date = {new Date('November 30, 2025 17:00:00')} renderer = {renderer} />
    )
}

export default CountdownTimer