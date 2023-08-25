import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import DataProvider from './context';
import Index from './pages/index';
import Questions from './pages/questions';
import Score from './pages/score';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000 });

function App() {
  return (
    <Router>
      <DataProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/questions" element={<Questions />}></Route>
          <Route exact path="/score-board" element={<Score />}></Route>
        </Routes>
      </div>
      </DataProvider>
    </Router>
  );
}

export default App;
