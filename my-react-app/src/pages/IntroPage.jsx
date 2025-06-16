import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div style={{ textAlign: 'center' }}>
      <h1 className="text-white">NoteMate!</h1>
      <p className="text-white">Welcome to our note page!</p>
    </div>
  );
}

export default Intropage;
