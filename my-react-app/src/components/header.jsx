import Cards1 from "./cards1";
import {Container} from 'react-bootstrap';
import { MyNotesData } from "../assets/data";
import {Row} from "react-bootstrap";


function Header() {
    return (
      <>
        <div className="headerBackground">

          <Container>
          <h5 className="p-2" style={{fontFamily : "League Spartan" , color : 'white'}}>My Notes</h5>
          <Row xs={1} md={3} className="g-4 p-2">

         {MyNotesData.filter(item =>item.id <= 3).map(item=>(
        <Cards1 key={item.id} item={item}/>
         ))}  
           {MyNotesData.filter(item =>item.id > 3).map(item=>(
        <Cards1 key={item.id} item={item}/>
         ))}  
         </Row>
        </Container>
        </div>
      </>
    );
  }
  
  export default Header;
  