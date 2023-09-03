import './App.css';
import Header from './componets/Header';
import AddStudent from './componets/AddStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
