import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotesPage from './pages/notes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
