import { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../CreateClient";
import NoteTitle from '../components/NoteTitle';
import NotesRendering from '../components/notesRendering';
import { IoIosArrowRoundBack } from "react-icons/io";
import SideBar from '../components/navbar';
import EditableText from "../components/editableText";
import EditableText2 from '../components/editableText2';







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

    const handleTitleSave = async (NewTitle) => {

        const {error} = await supabase.from("Notes").update({note_title: NewTitle }).eq('id' , id).single();
        if (error){
            console.error('Error updating title: ' , error.message);
            return;
        }

        setNotes((prevNote) => ({
            ...prevNote,
             note_title:NewTitle,

        }));
    };


    const handleDescSave = async (NewDesc) =>{
        const {error} = await supabase.from("Notes").update({note_desc: NewDesc}).eq('id' ,id).single();
        if (error){
            console.error("Error updating description: " , error.message);
            return;
        }

        setNotes((prevNote)=>({
            ...prevNote,
            note_desc : NewDesc,
        }));
    }



    return(
      <div>

        <NoteTitle/>

        {note && (
                <>
               <div className='p-5' style={{backgroundColor: 'rgb(24, 22, 26)' , height : '670px' , fontFamily : 'League Spartan'}}>
                    <a href="/"><IoIosArrowRoundBack href="/" className='text-white mb-5' style={{backgroundColor :  'rgb(24, 22, 26)' , fontSize : '20px'}} /></a>
                    <EditableText initialText = {note.note_title} onSave={handleTitleSave}/>
                    <div className='mt-5'>
                    <EditableText2 initialText2 = {note.note_desc} onSave={handleDescSave}/>
                    <h6 className='text-white mt-5'>Created At</h6>
                    <h6 className='text-white'>{note.created_at}</h6>

                    </div>
                       

                    </div>
                     <SideBar/>
                </>
            )}

            
      </div>
      
    )
}


export default NotePage;