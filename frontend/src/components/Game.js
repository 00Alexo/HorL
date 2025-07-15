const Game = ({getRandomCountry, difficulty, firstCountry, setFirstCountry, secondCountry, setSecondCountry, handleAnswer}) => {
    const getDifficultyLabel = (diff) => {
        switch(diff) {
            case 'very_easy': return 'Very Easy';
            case 'easy': return 'Easy';
            case 'medium': return 'Medium';
            case 'hard': return 'Hard';
            case 'all': return 'All Countries';
            default: return 'All Countries';
        }
    };

    const getDifficultyColor = (diff) => {
        switch(diff) {
            case 'very_easy': return 'bg-green-600';
            case 'easy': return 'bg-blue-600';
            case 'medium': return 'bg-yellow-600';
            case 'hard': return 'bg-red-600';
            case 'all': return 'bg-purple-600';
            default: return 'bg-purple-600';
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="flex justify-center mb-6">
                <div className={`${getDifficultyColor(difficulty)} px-4 py-2 rounded-full text-white font-bold text-sm`}>
                    Playing: {getDifficultyLabel(difficulty)}
                </div>
            </div>

            <div className="flex gap-8 justify-center items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 w-80 text-center">
                    <div className="mb-4">
                        <img 
                            src={`https://flagsapi.com/${firstCountry?.code}/flat/64.png`} 
                            alt={`${firstCountry?.name} flag`}
                            className="w-16 h-12 mx-auto rounded shadow-lg"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{firstCountry?.name}</h2>
                    <div className="text-gray-400 text-sm mb-4">
                        Population: {firstCountry?.population?.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                        {firstCountry?.difficulty?.replace('_', ' ')}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-gray-700 text-white px-4 py-2 rounded-full font-bold text-xl">
                        VS
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                        Which has more?
                    </div>
                </div>

                <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 w-80 text-center">
                    <div className="mb-4">
                        <img 
                            src={`https://flagsapi.com/${secondCountry?.code}/flat/64.png`} 
                            alt={`${secondCountry?.name} flag`}
                            className="w-16 h-12 mx-auto rounded shadow-lg"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{secondCountry?.name}</h2>
                    <div className="text-gray-400 text-sm mb-4">
                        Population: ???
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                        {secondCountry?.difficulty?.replace('_', ' ')}
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <button 
                    onClick={() => {
                        handleAnswer('higher'); 
                        setFirstCountry(secondCountry); 
                        setSecondCountry(getRandomCountry());
                    }}
                    className="bg-green-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                    Higher
                </button>
                <button 
                    onClick={() => {
                        handleAnswer('lower'); 
                        setFirstCountry(secondCountry); 
                        setSecondCountry(getRandomCountry());
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                    Lower
                </button>
            </div>
        </div>
    );
}
 
export default Game;