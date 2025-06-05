import Cards1 from "./cards1";
import {Col, Container} from 'react-bootstrap';
import {MyNotesData} from "../assets/data";
import {Row} from "react-bootstrap";
import { supabase } from "../CreateClient";
import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";

function ChunkArray(array , chunkSize){

    const chunks = [];

    for( let i = 0 ; i < array.length; i+= chunkSize){
        chunks.push(array.slice(i , i + chunkSize));
    }

    return chunks;
}

function Header() {

   const [notes , setUsers] = useState(null);
   const [fetchError , setFetchErrors] = useState(null);
    const location = useLocation();
    const message = location.state?.message;

  

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
           {fetchError && (<p>{fetchError}</p>)}
          
           {notes && ChunkArray(notes , 3).map((noteGroup , rowIndex) => (
          <Row xs={1} md={3} className="g-4 p-1" key={rowIndex}>
              {noteGroup.map((note)=>(
                <Col key={note.id}>
                   <Cards1 note={note}/>
                </Col>
              ))}

           </Row>

           ))}

        </Container>
            <div>
            {message && <h1 className="text-white">{message}</h1>}
           </div>
        </div>


     
      </>
    );
  }
  
  export default Header;
  