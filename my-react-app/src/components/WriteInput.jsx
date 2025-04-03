import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WriteNotes() {
  return (
    <div style={{backgroundColor : " rgb(24, 22, 26)" , height : "600px"}}>
    <div className='NotesInputWallpaper p-5' style={{backgroundColor : " rgb(24, 22, 26)"}}>
    <Container  >
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='Font text-white ' >Title</Form.Label>
        <Form.Control style={{backgroundColor : " rgb(24, 22, 26)" , color : "white"}} className='text-white' placeholder="Enter title" />
     
      </Form.Group>

    
      <Form.Label className='text-white'   >Example textarea</Form.Label>
        <Form.Control as="textarea" style={{backgroundColor : " rgb(24, 22, 26)"}} className='Font mb-5 text-white' />
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
    </Container>
    </div>
    </div>
  );
}

export default WriteNotes;