import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div >
          <Routes> 
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;