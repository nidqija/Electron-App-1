import { useState , useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../CreateClient";
import NoteTitle from '../components/NoteTitle';
import { IoIosArrowRoundBack } from "react-icons/io";
import SideBar from '../components/navbar';
import EditableText from "../components/editableText";
import EditableText2 from '../components/editableText2';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';





function NotePage(){
    const {id }= useParams();
    const [note , setNotes] = useState(null);
    const [error , setFetchErrors] = useState(null);
    const navigate = useNavigate();
    const [show , setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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

        const {error} = await supabase.from("Notes").update({note_title: NewTitle }).eq('id' , id);
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
        const {error} = await supabase.from("Notes").update({note_desc: NewDesc}).eq('id' ,id);
        if (error){
            console.error("Error updating description: " , error.message);
            return;
        }

        setNotes((prevNote)=>({
            ...prevNote,
            note_desc : NewDesc,
        }));
    }

     


    const deleteNotesAll = async () =>{
        const {error} = await supabase.from("Notes").delete().eq('id',id);
        
        if(error){
            console.error("Error deleting notes:", error.message);
            return;   
        }

     navigate('/home' , {state:{message2 : 'Note deleted successfully'}});

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
                       
                   <div className='mt-5'>
                        <Button variant='danger' onClick={handleShow}>delete</Button>
                    </div>
                    <Modal className='p-5' show={show} onHide={handleClose} style={{ borderRadius : '20px'}}>
                       <Modal.Header style={{backgroundColor:'rgb(24, 22, 26)'}} >
                         <Modal.Title style={{fontFamily:"League Spartan" , color:'white' , fontSize : '20px'}}>Are you sure?</Modal.Title>
                       </Modal.Header>
                          <Modal.Footer style={{backgroundColor:'rgb(24, 22, 26)'}} >
                        <Button className='justify-content-end' onClick={handleClose} id='button'>Cancel</Button>
                      <Button variant="danger" onClick={() =>{
                        deleteNotesAll();
                        }} 
                        style={{fontFamily: 'League Spartan'}}>
                           Proceed
                       </Button>
                       </Modal.Footer>
                    </Modal>

                    
                    </div>

                    
                     <SideBar/>
                </>
            )}

            
      </div>
      
    )
}


export default NotePage;