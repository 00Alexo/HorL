# HorL - Higher or Lower Countries Population Game

An interactive guessing game that tests your knowledge about country populations around the world. Guess which country has a higher or lower population and try to achieve the highest score possible!

## 🎮 About the Game

**HorL** is a "Higher or Lower" style game where players must guess which of two displayed countries has a larger population. The game offers multiple difficulty levels and includes a timer system to make the experience more engaging.

## ✨ Features

### 🏆 Gameplay
- **Guess populations**: Compare two countries and choose which has more inhabitants
- **Timer per question**: 15 seconds for each answer
- **Progressive scoring**: Earn points for each correct answer
- **Play until mistake**: Continue until you answer incorrectly or run out of time

### 🎯 Difficulty Levels
- **Very Easy**: Very well-known countries 
- **Easy**: Known countries 
- **Medium**: Moderately known countries 
- **Hard**: Less known countries 
- **All Countries**: Mix of all levels

### 🌟 Advanced Features
- **Flags**: Automatic display of country flags using FlagsAPI
- **High Score**: Saved in localStorage, persistent between sessions
- **Interactive alerts**: Notifications for new score, game over, maximum score
- **Dark theme**: Modern and eye-pleasing design

## 🛠️ Technologies Used

### Frontend
- **React.js**: Main framework for UI
- **JavaScript (ES6+)**: Application logic
- **Tailwind CSS**: Styling and responsive design

### External APIs
- **FlagsAPI**: For displaying country flags
- **Endpoint**: `https://flagsapi.com/{country_code}/flat/64.png`

### Storage
- **localStorage**: Local high score saving
- **JSON**: Database with country information

## 📊 Data Structure

### Countries Data
Each country contains:
```json
{
  "name": "Romania",
  "code": "RO",
  "population": 19237691,
  "difficulty": "easy"
}
```

### Game States
- **Start Screen**: Main menu with difficulty selector
- **Game Active**: Game in progress
- **Game Over**: Final screen with results

## 🎨 React Components

### Pages
- **Home**: Main component that manages game state
- **StartScreen**: Start screen with difficulty options

### Components
- **Game**: Displays the two countries for comparison
- **Timer**: Timer with visual countdown
- **EndGame**: Button to end the game
- **HappyAlert**: Notification system with multiple types

## 🔄 Game Flow

1. **Start**: User selects difficulty and starts the game
2. **Gameplay**: 
   - Two countries are displayed
   - User chooses "Higher" or "Lower"
   - Timer counts down from 15 seconds
3. **Correct Answer**: 
   - Score increases
   - New country is displayed
   - Timer resets
4. **Game Over**:
   - Wrong answer or time expired
   - Check and save high score
   - Reset for new game

## 🎯 Game Logic

### Scoring System
- **+1 point** for each correct answer
- **High Score** automatically saved in localStorage
- **Maximum score** when all countries have been guessed

### Time Management
- **15 seconds** per question
- **Auto-reset** on correct answer
- **Game over** when time expires

### Selection Algorithm
- Countries are removed from pool after use
- Filtering based on selected difficulty
- Complete reset at game end

## 🎭 Alert Types

### Success (Green-Yellow)
- **New High Score**: New record score
- **Perfect Score**: All countries guessed

### Error (Red)
- **Wrong Answer**: Incorrect answer
- **Game Over**: End of game

### Warning (Orange)
- **Time's Up**: Time has expired
