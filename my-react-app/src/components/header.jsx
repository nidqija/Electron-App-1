import Cards1 from "./cards1";
import {Container} from 'react-bootstrap';
import {MyNotesData} from "../assets/data";
import {Row} from "react-bootstrap";
import { supabase } from "../CreateClient";
import { useState , useEffect } from "react";

function Header() {

   const [notes , setUsers] = useState(null);
   const [fetchError , setFetchErrors] = useState(null);

  

   console.log(notes);
   useEffect(()=>{
    const fetchNotes = async () =>{
      const {data , error} = await supabase.from("Notes").select();

      if (error){
        setFetchErrors("could not fetch the smoothies");
        setUsers(null);
        console.log(error);
      } 

      if(data){
        setUsers(data);
        setFetchErrors(null);

        }
      }

      fetchNotes();
    } , [])
    





    return (
      <>
        <div className="headerBackground">

          <Container>
          <h5 className="p-2" style={{fontFamily : "League Spartan" , color : 'white'}}>My Notes</h5>
          <Row xs={1} md={3} className="g-4 p-1">
           {fetchError && (<p>{fetchError}</p>)}
           {notes && (
             <div className="note-page">
             
          {notes.filter(note => note.id <= 3).map(note => (
             <Cards1  key={note.id} note={note}/>
           ))}
             </div>
            )}
               {notes && (
             <div className="note-page">
             
          {notes.filter(note =>  note.id <= 6 && note.id >=3 ).map(note => (
             <Cards1  key={note.id} note={note}/>
           ))}
             </div>
            )}
    
    
         </Row>
        </Container>
        </div>


     
      </>
    );
  }
  
  export default Header;
  