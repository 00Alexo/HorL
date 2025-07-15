const EndGame = ({stopGame}) => {
    return (
        <div className="absolute top-8 left-8 text-white">
            <button 
                onClick={stopGame}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold text-white transition-colors duration-200 shadow-lg border border-red-500"
            >
                End Game
            </button>
        </div>
    );
}
 
export default EndGame;