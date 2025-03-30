import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "../App.css";
import { FaFileCirclePlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';




function MenuPage(){
    return(
      <div className='body'>
      <div className='headerBackground p-3'>
        <Container>
        <h5 className="p-2" style={{fontFamily : "League Spartan" , color : 'white'}}>New Notes</h5>
      
      <div className="d-grid gap-2">
      <Button id='ChoicesMenu'>
        Add new <FaFileCirclePlus/>
      </Button>
   
    </div>

   
      </Container>
      </div>
      </div>
    )
}

export default MenuPage;