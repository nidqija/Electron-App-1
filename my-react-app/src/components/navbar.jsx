import "../App.css";
import Nav from 'react-bootstrap/Nav';

function SideBar() {
  return (
    <div style={{backgroundColor :'rgb(24, 22, 26)'}}>
    <Nav fill variant="tabs" defaultActiveKey="/home" >
      <Nav.Item>
        <Nav.Link eventKey="link">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" >
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default SideBar;