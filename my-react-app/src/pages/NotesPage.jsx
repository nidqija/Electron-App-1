// pages/NotePage.jsx

import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { supabase } from "../CreateClient";
import NoteTitle from "../components/NoteTitle";
import { IoIosArrowRoundBack } from "react-icons/io";
import SideBar from "../components/navbar";
import EditableText from "../components/editableText";
import EditableText2 from "../components/editableText2";
import { Button, Modal, Alert, Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import '../App.css';

function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [successEdited, setSuccessEdited] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      setSuccessEdited(true);
    }
  }, [message]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data, error } = await supabase
          .from("Notes")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setNote(data);
      } catch (err) {
        setFetchError(err.message);
      }
    };



    fetchNote();
  }, [id]);

  const handleTitleSave = async (newTitle) => {
    const { error } = await supabase.from("Notes").update({ note_title: newTitle }).eq("id", id);
    if (!error) {
      setNote((prev) => ({ ...prev, note_title: newTitle }));
    }
  };

  const handleDescSave = async (newDesc) => {
    const { error } = await supabase.from("Notes").update({ note_desc: newDesc }).eq("id", id);
    if (!error) {
      setNote((prev) => ({ ...prev, note_desc: newDesc }));
    }
  };

  const deleteNote = async () => {
    const { error } = await supabase.from("Notes").delete().eq("id", id);
    if (!error) {
      navigate("/home", { state: { message2: "Note deleted successfully" } });
    }
  };

  return (
    <div>
        
      <NoteTitle />

      {note && (
        <>
                 <Container>
        
            {message && successEdited && (
                
                <Alert variant="success" dismissible onClose={() => setSuccessEdited(false)}>
                <Alert.Heading>Updated!</Alert.Heading>
                <p>Your note has been updated!</p>
                </Alert>
            )}
        

          <div
            className="p-5"
            style={{
              backgroundColor: "rgb(24, 22, 26)",
              height: "670px",
              fontFamily: "League Spartan",
            }}
          >
           

            
                <Navbar className="mb-5"  style={{backgroundColor: 'rgb(24, 22, 26)' }}>
        <Navbar.Brand className="text-white" href="#home"> <a href="/home">
              <IoIosArrowRoundBack className="text-white " style={{ fontSize: "20px" }} />
            </a></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          <Navbar.Text className="text-white" >
            <NavDropdown title="..." id="basic-nav-dropdown" style={{backgroundColor: 'rgb(24, 22, 26)' , color:'white'}} >
              <NavDropdown.Item href="#action/3.1"  >Add Calendar</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>


            <EditableText initialText={note.note_title} onSave={handleTitleSave} />
            <div className="mt-5">
              <EditableText2 initialText2={note.note_desc} onSave={handleDescSave} />
              <h6 className="text-white mt-5">Created At</h6>
              <h6 className="text-white">{note.created_at}</h6>
            </div>

            <div className="mt-5">
              <Button variant="danger" onClick={() => setShowModal(true)}>
                Delete
              </Button>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
              <Modal.Header style={{ backgroundColor: "rgb(24, 22, 26)" }}>
                <Modal.Title style={{ color: "white" }}>Are you sure?</Modal.Title>
              </Modal.Header>
              <Modal.Footer style={{ backgroundColor: "rgb(24, 22, 26)" }}>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={deleteNote}>
                  Proceed
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
     </Container>
          <SideBar />
          
        </>
      )}
    </div>
  );
}

export default NotePage;
