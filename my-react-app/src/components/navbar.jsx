import "../App.css";
import { FaHome } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import { TiDocumentAdd } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { IoIosStats } from "react-icons/io";


function SideBar() {
  return (
    <div style={{ backgroundColor: 'rgb(24, 22, 26)', position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: 'white', fontFamily: 'League Spartan', fontWeight: '400' }}>
            <FaHome /> <br />Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newnote" style={{ color: 'white', fontFamily: 'League Spartan', fontWeight: '400' }}>
            <TiDocumentAdd /> <br />New Note
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: 'white', fontFamily: 'League Spartan', fontWeight: '400' }}>
           <IoIosStats/> <br /> Your Stats
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: 'white', fontFamily: 'League Spartan', fontWeight: '400' }}>
            <MdAccountCircle/> <br /> Your Account
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBar;
