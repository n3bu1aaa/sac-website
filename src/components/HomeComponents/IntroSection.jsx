import bgImage from '../../assets/images/bg_image.jpg'
import BlurText from '../Animations/BlurText'
import GradientText from '../Animations/GradientText'

const IntroSection = () => {
  return (
    <section 
    style = {{ backgroundImage: `url(${bgImage})` }} 
    className="App-header relative w-full min-h-screen flex flex-col justify-center items-center mb-16 bg-gray-900 bg-cover bg-center text-white px-4 text-center">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg bg-opacity-20 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold text-black mb-4">
        <BlurText
          text="Rubber Duck Gala"
          delay={500}
          animateBy="words"
          direction="top"
          className='text-center'
        />
        </h1>
        <GradientText
          colors={["#26cc88", "#2f5ccc", "#26cc88", "#2f5ccc", "#26cc88"]}
          animationSpeed={3}
          showBorder={false}
          className="text-xl text-black mb-6"
        >
          Join us for a fun night of food, drinks and dancing!
        </GradientText>
        <div className="text-lg text-black mb-8 space-y-2">
          <p>📅 November 32, 2025 | 🕰️ 5pm–10pm</p>
          <p>📍 Emily's Mansion Banquet Hall</p>
        </div>
      </div>
    </section>
  )
}

export default IntroSection