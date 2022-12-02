import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    let navigate=useNavigate();

    const[showIntro,setIntro]=React.useState(true);
    setTimeout(()=>{
        setIntro(false);
    },1200)

  return (
    <div>
    Loading....
        {!showIntro?navigate("/Home"):null}
    </div>
  )
}
