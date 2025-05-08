import Countdown from "react-countdown";
import ScrollCountUp from "../Animations/ScrollCountUp";

const CountdownTimer = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-4xl font-bold text-yellow-400">
          The Gala Has Started!
        </span>
      );
    } else {
      return (
        <div className="flex gap-6 text-center">
          <div>
            <div className="text-6xl font-bold text-yellow-500">
              <ScrollCountUp end={days + 2} duration={7.5} />
            </div>
            <div className="text-lg text-black">days</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-yellow-500">
              <ScrollCountUp end={hours} duration={7.5} />
            </div>
            <div className="text-lg text-black">hours</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-yellow-500">
              <ScrollCountUp end={minutes} duration={7.5} />
            </div>
            <div className="text-lg text-black">minutes</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-yellow-500">
              {seconds}
            </div>
            <div className="text-lg text-black">seconds</div>
          </div>
        </div>
      );
    }
  };
  return (
    <Countdown
      date={new Date("November 30, 2025 17:00:00")}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
