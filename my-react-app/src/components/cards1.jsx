import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";


function Cards1({note}){
    return(
      <>
    
              <div className='mb-4' >
                <Col >
                  <Card style={{height : '200px' , backgroundColor :'rgb(24, 22, 26)', borderColor : "white"}}>
                    <Card.Body style={{color :'white'}}>
                      <Card.Title>{note.note_title} </Card.Title>
                      
                      <Card.Text>
                      Click to see the full description
                      </Card.Text>
                    </Card.Body>
                    <Button href={`/notes/${note.id}`} style={{backgroundColor:'rgb(24, 22, 26)', borderColor : "white"}}><FaArrowRight/></Button>
                  </Card>
                </Col>
                </div>
             
           
           
            </>
          );
        }
    


export default Cards1;