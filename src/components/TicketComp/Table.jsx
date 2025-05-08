const Table = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-8 border-yellow-400 hover:scale-105 hover:rotate-1 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-yellow-500">MMHS Students</h3>
            <p className="text-gray-700 text-lg mb-4">Includes full dinner, entertainment, and a night to remember!</p>
            <p className="text-3xl font-bold text-yellow-500">$30</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-8 border-yellow-400 hover:scale-105 hover:rotate-1 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-yellow-500">Guests</h3>
            <p className="text-gray-700 text-lg mb-4">Includes students from other schools and offers the same perks.</p>
            <p className="text-3xl font-bold text-yellow-500">$105</p>
        </div>
    </div>
  )
}

export default Table