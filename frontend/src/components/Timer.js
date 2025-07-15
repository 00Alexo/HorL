const Timer = ({time}) => {
    return (
        <div className="absolute top-8 right-8 text-white">
            <div className="bg-gray-800 bg-opacity-80 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-700">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-400 mb-1">TIME LEFT:</p>
                </div>
                <p className="text-3xl font-bold font-mono">{time}</p>
            </div>
        </div>
    );
}
 
export default Timer;