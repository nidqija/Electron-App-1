import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";

function SideBar() {
  return (
    <Navbar expand="lg" bg='primary' className='sideBar'>
    <ul>
        <li className='p-3'>hello</li>
        <li className='p-3'>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>

    </ul>
    </Navbar>
  );
}

export default SideBar;