import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function NotesRendering(){
    return(
        <>
        <div>
                 <div className='headerBackground p-3'>
                      <Container  >
    <Form  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='Font text-white ' >Title</Form.Label>
        <Form.Control name='note_title' style={{backgroundColor : " rgb(24, 22, 26)" , color : "white"}} className='text-white'  />
     
      </Form.Group>

    
      <Form.Label className='text-white'>Description</Form.Label>
        <Form.Control name='note_desc' as="textarea"  rows={14} style={{backgroundColor : " rgb(24, 22, 26)"}} className='Font mb-4 text-white' />
      <Button  style={{backgroundColor : 'white' , color : 'black' , fontFamily : 'League Spartan' , fontWeight : '500'}} type="submit">
        Save
      </Button>
    </Form>
    </Container>
                 </div> 
        </div>
        
        
        </>
    )
}


export default NotesRendering;