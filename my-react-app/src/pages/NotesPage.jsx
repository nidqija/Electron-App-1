import { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../CreateClient";
import NoteTitle from '../components/NoteTitle';
import NotesRendering from '../components/notesRendering';


function NotePage(){
    const {id }= useParams();
    const [note , setNotes] = useState(null);
    const [error , setFetchErrors] = useState(null);
    

    useEffect(()=>{
        const fetchItem = async()=>{

            try{
            const{data , error} = await supabase.from("Notes").select('*').eq('id' , id).single();

            if(error){
                throw error;
            }
            setNotes(data);
            } catch (error){
                setFetchErrors(error);
            }

           
        };
         fetchItem();
    } , [id]);

    return(
      <div>

        <NoteTitle/>
        
        {note && (
                <>
               <div className='p-5' style={{backgroundColor: 'rgb(24, 22, 26)' , height : '670px' , fontFamily : 'League Spartan'}}>

                    <h3 className='text-white'>{note.note_title}</h3>
                    <div className='mt-5'>
                    <h6 className='text-white'>{note.note_desc}</h6>
                    <h6 className='text-white mt-5'>Created At</h6>
                    <h6 className='text-white'>{note.created_at}</h6>

                    </div>
                    </div>
                </>
            )}
            
      </div>
      
    )
}


export default NotePage;