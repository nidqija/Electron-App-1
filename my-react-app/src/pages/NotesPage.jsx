import { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../CreateClient";



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
        
       <h1>notes details</h1>
        {note && (
                <>
                    <h2>{note.note_title}</h2>
                    <h2>{note.note_desc}</h2>
                </>
            )}
      </div>
    )
}


export default NotePage;