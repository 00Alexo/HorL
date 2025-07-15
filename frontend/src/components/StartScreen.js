import { useState } from 'react';

const StartScreen = ({startGame, difficulty, setDifficulty}) => {
    const [showRules, setShowRules] = useState(false);
    
    const difficultyOptions = [
        { value: 'all', label: 'All Countries', description: 'Mix of all difficulty levels' },
        { value: 'very_easy', label: 'Very Easy', description: 'Well-known countries only' },
        { value: 'easy', label: 'Easy', description: 'Common countries' },
        { value: 'medium', label: 'Medium', description: 'Moderately known countries' },
        { value: 'hard', label: 'Hard', description: 'Lesser-known countries' }
    ];

    return (
        <div className="text-center text-white">
            {showRules && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-4 border border-gray-600">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-white">Game Rules</h2>
                            <button 
                                onClick={() => setShowRules(false)}
                                className="text-gray-400 hover:text-white text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className="text-left space-y-3 text-gray-300">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-400">🎯</span>
                                <span>Guess which country has a higher population</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">⏱️</span>
                                <span>You have 15 seconds per country guess</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">🏆</span>
                                <span>Score increases with each correct answer</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-red-400">❌</span>
                                <span>Game ends when time runs out or wrong answer</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-purple-400">🌍</span>
                                <span>Choose difficulty to filter countries</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => setShowRules(false)}
                            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-center gap-4 mb-4 ml-4">
                <h1 className="text-6xl font-bold">Higher or Lower</h1>
                <button 
                    onClick={() => setShowRules(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex 
                    items-center justify-center transition-colors text-lg font-bold mt-3"
                    title="Game Rules"
                >
                    ?
                </button>
            </div>
            
            <p className="text-xl mb-8 text-gray-300">Population Edition</p>
            <p className="text-lg mb-12 text-gray-400">
                Guess which country has a higher population!
            </p>
            
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Select Difficulty</h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                    {difficultyOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setDifficulty(option.value)}
                            className={`px-4 py-3 rounded-lg transition-all duration-200 border-2 ${
                                difficulty === option.value
                                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                                    : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                            }`}
                        >
                            <div className="text-sm font-bold">{option.label}</div>
                            <div className="text-xs opacity-80">{option.description}</div>
                        </button>
                    ))}
                </div>
            </div>
            
            <button 
                onClick={startGame}
                className="px-8 py-4 bg-gray-800 text-white font-bold text-xl rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-600"
            >
                Start Game
            </button>
        </div>
    );
}
 
export default StartScreen;