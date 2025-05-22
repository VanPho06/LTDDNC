import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import DetailScreen from './components/DetailScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/detail" element={<DetailScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;