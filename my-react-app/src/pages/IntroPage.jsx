import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiPenguin } from "react-icons/gi";
import { Container } from "react-bootstrap";
import "../App.css";



function Intropage() {
  const navigate = useNavigate();

   useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000); // Show intro page for 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ textAlign: 'center',height: '100vh' }} >
    <div>
      <h1 className=" text-white" id="example-fade-text"><GiPenguin /> NoteMate!</h1>
      <p className="text-white" id="example-fade-text ">A note app. But better!</p>
    </div>
    </Container>
  );
}

export default Intropage;
