import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotesPage from './pages/HomePage';
import NewNotes from './pages/newNotes';
import NotePage from './pages/NotesPage';
import { supabase } from './CreateClient';
import { useEffect, useState } from 'react';

function App() {

  const [notes , setUsers] = useState([]);

  useEffect(()=>{
    fetchUsers()
  },[])


  async function fetchUsers(){
    const {data} = await supabase
    .from('notes')
    .select("*")
    setUsers(data)
 
 }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/newnote" element={<NewNotes/>}/>
        <Route path="/notes/:id" element={<NotePage/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
