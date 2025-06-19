import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiPenguin } from "react-icons/gi";
import { Container } from "react-bootstrap";
import {useTransition , animated} from '@react-spring/web';
import "../App.css";



function Intropage() {
  const navigate = useNavigate();
  const [showTitle , setShowTitle] = useState(false);

  useEffect(()=>{

    setShowTitle(true);


    const timer2 = setTimeout(()=>{
      setShowTitle(false);

    },2000);

    return () => clearTimeout(timer2);
  },[]);


  const transition = useTransition(showTitle,{
    from:{opacity:0,transform: 'translateY(20px)'},
    enter:{opacity:1,transform: 'translateY(0px)' },
    leave:{opacity:0,transform: 'translateY(-20px)'},
    config:{duration:1000},
  })




   useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000); // Show intro page for 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <>
    <Container className="d-flex justify-content-center align-items-center" style={{ textAlign: 'center',height: '100vh' }} >
    <div >
      {transition((style,item)=>
      item?(
     <div>
      <animated.h1 className=" text-white" style={style} ><GiPenguin /> NoteMate!</animated.h1>
      <animated.p className="text-white" style={style}>A note app. But better!</animated.p>
     </div>
      ) :null
      )}
   
    </div>
    </Container>
    </>
  );
}

export default Intropage;
