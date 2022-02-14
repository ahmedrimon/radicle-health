import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
