import { useState, useEffect } from 'react';
import countriesData from '../config/countries.json';
import StartScreen from '../components/StartScreen';
import Timer from '../components/Timer';
import EndGame from '../components/EndGame';
import HappyAlert from '../components/HappyAlert';
import Game from '../components/Game';

const originalCountriesData = JSON.parse(JSON.stringify(countriesData));

const Home = () => {
    const [gameState, setGameState] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [time, setTime] = useState(15); 
    const [alert, setAlert] = useState(false);
    const [difficulty, setDifficulty] = useState('all');
    const [firstCountry, setFirstCountry] = useState(null);
    const [secondCountry, setSecondCountry] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);

    useEffect(() => {
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, [timerInterval]);

    useEffect(() => {
        const savedHighScore = localStorage.getItem('horl-highscore');
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore));
        }
    }, []);

    const startTimer = () => {
        setTime(15);
        
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    setIsGameOver(true);
                    setAlert({
                        title: 'Time\'s Up!', 
                        content: `Time ran out! Your score: ${score+1}`, 
                        type: 'warning'
                    });
                    setTimeout(() => {
                        setAlert(false);
                        setIsGameOver(false);
                        countriesData.countries = JSON.parse(JSON.stringify(originalCountriesData.countries));
                        stopGame();
                    }, 3000);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        
        setTimerInterval(interval);
    };

    const stopTimer = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
    };

    const startGame = () => {
        setGameState(true);
        setFirstCountry(getRandomCountry());
        setSecondCountry(getRandomCountry());
        setScore(0);
        setIsGameOver(false);
        startTimer(); 
    };

    const stopGame = () =>{
        setGameState(false);
        stopTimer();
        
        countriesData.countries = JSON.parse(JSON.stringify(originalCountriesData.countries));
        
        if(score > highScore) {
            setHighScore(score);
            localStorage.setItem('horl-highscore', (score+1).toString());
            setAlert({title: 'New High Score!', content: `You've achieved a new high score! ${score}`, type: 'success'});
            setTimeout(() =>{
                setAlert(false);
            }, 3000)
        }
        setScore(0);
    }

    const getRandomCountry = () =>{
        let filteredCountries = countriesData.countries;
        
        if (difficulty !== 'all') {
            filteredCountries = countriesData.countries.filter(country => country.difficulty === difficulty);
        }
        
        if (filteredCountries.length === 0) {
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * filteredCountries.length);
        const selectedCountry = filteredCountries[randomIndex];

        const countryIndex = countriesData.countries.findIndex(country => country.code === selectedCountry.code);
        if (countryIndex > -1) {
            countriesData.countries.splice(countryIndex, 1);
        }
        
        return selectedCountry;
    }

    const handleAnswer = (answer) =>{
        if(isGameOver) return;
        
        stopTimer(); 
        if(answer === 'higher' && firstCountry.population > secondCountry.population){
            setScore(score + 1);
            
            const nextCountry = getRandomCountry();
            if (nextCountry === null) {
                setIsGameOver(true);
                setAlert({
                    title: 'Perfect Score!', 
                    content: `Congratulations! You've guessed all countries! Max score: ${score + 1}`, 
                    type: 'success'
                });
                setTimeout(() => {
                    setAlert(false);
                    setIsGameOver(false);
                    countriesData.countries = JSON.parse(JSON.stringify(originalCountriesData.countries));
                    stopGame();
                }, 4000);
                return;
            }
            
            setFirstCountry(secondCountry);
            setSecondCountry(nextCountry);
            startTimer(); 
        }
        else if(answer === 'lower' && firstCountry.population < secondCountry.population){
            setScore(score + 1);
            
            const nextCountry = getRandomCountry();
            if (nextCountry === null) {
                setIsGameOver(true);
                setAlert({
                    title: 'Perfect Score!', 
                    content: `Congratulations! You've guessed all countries! Max score: ${score + 1}`, 
                    type: 'success'
                });
                setTimeout(() => {
                    setAlert(false);
                    setIsGameOver(false);
                    countriesData.countries = JSON.parse(JSON.stringify(originalCountriesData.countries));
                    stopGame();
                }, 4000);
                return;
            }
            
            setFirstCountry(secondCountry);
            setSecondCountry(nextCountry);
            startTimer(); 
        }
        else {
            setIsGameOver(true);
            setAlert({title: 'Wrong Answer!', content: `Game Over! Your score: ${score}`, type: 'error'});
            setTimeout(() => {
                setAlert(false);
                setIsGameOver(false);
                countriesData.countries = JSON.parse(JSON.stringify(originalCountriesData.countries));
                stopGame();
            }, 3000);
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
                {alert && (
                    <HappyAlert title={alert.title} content={alert.content} type={alert.type} />
                )}

                {!gameState &&
                    <StartScreen 
                        startGame={startGame} 
                        difficulty={difficulty} 
                        setDifficulty={setDifficulty} 
                    />
                }
                {gameState && (
                    <>
                        <div>
                            <EndGame stopGame={stopGame} />
                            <Timer time={time}/>
                        </div>  
                        <div className="text-center text-white">
                            <h1 className="text-4xl font-bold mb-4">Game in Progress</h1>
                        </div>
                        <div className={isGameOver ? 'pointer-events-none opacity-50' : ''}>
                            <Game 
                                getRandomCountry = {getRandomCountry}
                                difficulty = {difficulty}
                                firstCountry = {firstCountry}
                                setFirstCountry = {setFirstCountry}
                                secondCountry = {secondCountry}
                                setSecondCountry = {setSecondCountry}
                                handleAnswer={handleAnswer}
                            />
                        </div>
                    </>
                )}
                
                <div className="flex flex-row gap-10 absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
                    <div className="bg-gray-800 bg-opacity-80 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">HIGH SCORE</p>
                        <p className="text-3xl font-bold">{highScore}</p>
                    </div>
                    <div className="bg-gray-800 bg-opacity-80 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">CURRENT SCORE</p>
                        <p className="text-3xl font-bold">{score}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;