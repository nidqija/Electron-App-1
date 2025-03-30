import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";


function Cards1({item}){
    return(
      <>
    
              <div >
                <Col >
                  <Card style={{height : '200px' , backgroundColor :'rgb(24, 22, 26)', borderColor : "white"}}>
                    <Card.Body style={{color :'white'}}>
                      <Card.Title>{item.title} </Card.Title>
                      <Card.Text>
                      {item.description}
                      </Card.Text>
                    </Card.Body>
                    <Button style={{backgroundColor:'rgb(24, 22, 26)', borderColor : "white"}}><FaArrowRight/></Button>
                  </Card>
                </Col>
                </div>
             
           
           
            </>
          );
        }
    


export default Cards1;