import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { supabase } from '../CreateClient';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function WriteNotes() {
  
  const [notes , setUsers] = useState([]);
  const navigate = useNavigate();
  const [note , setUser] = useState({note_title : "  " , note_desc : " "});
  const [messageModal , setMessageModal] = useState(false);

  console.log(note);

  useEffect(()=>{
     fetchNotes();
  }, [])

  async function fetchNotes(){
    const { data , error} = await supabase.from("Notes").select("*");
    if (error){
      console.log("Error fetching notes:" , error);
      return;


    }

    if (data){
      setUsers(data);
    }
  }


  function HandleChange(event){
    const {name , value} = event.target;
    setUser((prevFormData)=>({
      ...prevFormData,
      [name] :value,
    }));
  }

   const sendMessageModal = () =>{
      navigate('/' ,  {state:{message : 'Note created succesfully!'}})
   }


  async function createNote(event){
    event.preventDefault();

    const {error} = await supabase.from("Notes").insert({
      note_title : note.note_title,
      note_desc : note.note_desc,
    });

    if (error){
      alert("Error submitting the notes");
      console.log(error);

    } else{
      handleSend();
    }
  }



  function handleSend(){
    if(!Notification in window){
      alert("Submission failed , please try again");
      return;

    }

    Notification.requestPermission().then((permission)=>{
      if (permission == "granted"){
        const notification = new Notification("Successful!");
        notification.onclick=()=>{
          window.open("about:blank");
        };
      }
    });
  }


 

  return (
    <div style={{backgroundColor : " rgb(24, 22, 26)" , height : "600px"}}>
    <div className='NotesInputWallpaper p-5' style={{backgroundColor : " rgb(24, 22, 26)"}}>
    <Container  >
    <Form onSubmit={createNote} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='Font text-white ' >Title</Form.Label>
        <Form.Control onChange={HandleChange} name='note_title' style={{backgroundColor : " rgb(24, 22, 26)" , color : "white" , fontFamily :'League Spartan'}} className='text-white'  />
     
      </Form.Group>

    
      <Form.Label className='Font text-white'>Description</Form.Label>
        <Form.Control onChange={HandleChange} name='note_desc' as="textarea"  rows={14} style={{backgroundColor : " rgb(24, 22, 26)"}} className='Font mb-4 text-white' />
      <Button  style={{backgroundColor : 'white' , color : 'black' , fontFamily : 'League Spartan' , fontWeight : '500'}} type="submit" onClick={sendMessageModal}>
        Save
      </Button>
    </Form>
    </Container>
    </div>
    </div>
  );
}

export default WriteNotes;