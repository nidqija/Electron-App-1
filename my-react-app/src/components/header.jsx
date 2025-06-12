import Cards1 from "./cards1";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { supabase } from "../CreateClient";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

function ChunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function Header() {
  const [notes, setNotes] = useState([]);
  const [fetchError, setFetchErrors] = useState(null);
  const location = useLocation();
  const message = location.state?.message;
  const [alerts, setAlerts] = useState(false);

  const closeAlerts = () => setAlerts(false);

  useEffect(() => {
    if (message) {
      setAlerts(true);
    }
  }, [message]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from("Notes").select();

      if (error) {
        setFetchErrors("Could not fetch the notes.");
        setNotes([]);
        console.error(error);
      } else {
        setNotes(data);
        setFetchErrors(null);
      }
    };

    fetchNotes();
  }, []);

  const chunkedNotes = useMemo(() => ChunkArray(notes, 3), [notes]);

  return (
    <>
      <div className="headerBackground">
        <Container>
          <div>
            {message && alerts && (
              <Alert variant="success" onClose={closeAlerts} dismissible>
                <Alert.Heading>Congratulations!</Alert.Heading>
                <p>Your new note is created!</p>
              </Alert>
            )}
          </div>

          <h5 className="p-2" style={{ fontFamily: "League Spartan", color: "white" }}>
            My Notes
          </h5>

          {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}

          {chunkedNotes.map((noteGroup, rowIndex) => (
            <Row xs={1} md={3} className="g-4 p-1" key={rowIndex}>
              {noteGroup.map((note) => (
                <Col key={note.id || `${rowIndex}-${note.title}`}>
                  <Cards1 note={note} />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Header;
