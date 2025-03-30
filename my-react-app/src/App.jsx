import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotesPage from './pages/HomePage';
import NewNotes from './pages/newNotes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/newnote" element={<NewNotes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
