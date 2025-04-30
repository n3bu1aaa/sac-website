import bgImage from '../../assets/images/bg_image.jpg'

const IntroSection = () => {
  return (
    <section 
    style = {{ backgroundImage: `url(${bgImage})` }} 
    className="App-header relative w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 bg-cover bg-center text-white px-4 text-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
            Rubber Duck Gala
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Join us for a fun night of food, drinks and dancing!
        </p>
        <div className="text-lg text-gray-400 mb-8 space-y-2">
          <p>📅 November 32, 2025 | 🕰️ 5pm–10pm</p>
          <p>📍 Emily's Mansion Banquet Hall</p>
        </div>
    </section>
  )
}

export default IntroSection