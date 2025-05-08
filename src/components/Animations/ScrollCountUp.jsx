import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const ScrollCountUp = ({end, duration, ...props}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref = {ref}>
            {inView && (
                <CountUp end = {end} duration = {duration} {...props} />
            )}
        </div>
    )
}

export default ScrollCountUp;