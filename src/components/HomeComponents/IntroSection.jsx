import bgImage from '../../assets/images/bg_image.jpg'

const IntroSection = () => {
  return (
    <section 
    style = {{ backgroundImage: `url(${bgImage})` }} 
    className="App-header relative w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 bg-cover bg-center text-white px-4 text-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg bg-opacity-20">
        <h1 className="text-5xl font-extrabold text-black mb-4">
            Rubber Duck Gala
        </h1>
        <p className="text-xl text-black mb-6">
          Join us for a fun night of food, drinks and dancing!
        </p>
        <div className="text-lg text-black mb-8 space-y-2">
          <p>📅 November 32, 2025 | 🕰️ 5pm–10pm</p>
          <p>📍 Emily's Mansion Banquet Hall</p>
        </div>
      </div>
    </section>
  )
}

export default IntroSection