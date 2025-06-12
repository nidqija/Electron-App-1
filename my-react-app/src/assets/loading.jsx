import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';


function Loading(){
   return(
      <Container className='text-center p-5' >
      <Spinner animation="border" role="status" variant='light'>
      <span className="visually-hidden">Loading...</span>
      </Spinner>
      </Container>
   )
}


export default Loading;