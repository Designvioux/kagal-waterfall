import { useState, useEffect } from "react";
import "./SystemCards.css";
import waterfallUp from "./Images/WhatsAppVideo2026-03-13at6.17.55PM-ezgif.com-video-to-gif-converter.gif";
import waterfallDown from './Images/ezgif.com-animated-gif-maker (1).gif'

const SystemCards = () => {
    const [action,setAction] = useState("");
  const systems = [1, 2, 3];

  const [popupOpen,setPopupOpen] = useState(false);
  const [activeSystem,setActiveSystem] = useState(null);
  useEffect(() => {
  const img1 = new Image();
  img1.src = waterfallUp;

  const img2 = new Image();
  img2.src = waterfallDown;
}, []);
  const openPopup = (num, type)=>{
  setActiveSystem(num);
  setAction(type);
  setPopupOpen(true);
};

  const closePopup = ()=>{
    setPopupOpen(false);
  };


  return (
    <div className="container">
      <h1 className="title">AUTOMATIC WATER FALL DOOR CONTROL</h1>

      <div className="card-wrapper">
        {systems.map((num) => (
          <div className="card" key={num}>
            <div className="card-header">
              <h3>System</h3>
              <span className="system-number">{num}</span>
            </div>

            <button className="up-btn"  onClick={()=>openPopup(num,"UP")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
             Up</button>

            <button className="down-btn" onClick={()=>openPopup(num,"DOWN")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg> Down</button>

         <div className="card-info">
  
  {/* <div className="info-row">
    <p>Send Time</p>
    <h1>3/13/2026, 12:20:21 PM</h1>
  </div>

  <div className="info-row">
    <p>Command</p>
    <b>UP</b>
  </div> */}

</div>

          </div>
        ))}
      </div>
       <div className="water-container">
      <div className="water-header">
        <h3>Water Status</h3>
      </div>
<div className="sep">
      <div className="water-body">
        
        <div className="status-row">
          <span>Last Update Time</span>
          <span>Aug 11, 2024, 4:31 p.m.</span>
        </div>

        <div className="status-row">
          <span>Status</span>

        <div className="status-active">
  <span className="status-icon">
    <svg className="drop-icon" viewBox="0 0 24 24">
      <path d="M12 2C12 2 6 10 6 14a6 6 0 0 0 12 0c0-4-6-12-6-12z"/>
    </svg>
  </span>
  <span>Active</span>
</div>
          </div>
        </div>
      </div>
    </div>
     {popupOpen && (
        <div className="popup-overlay">

          <div className="popup">

            <span className="close-btn" onClick={closePopup}>×</span>

            <div className="popup-icon">💧</div>

            <h2>System {activeSystem}</h2>

          <div className={`success-box ${action === "DOWN" ? "error-box" : "success-green"}`}>
  {action === "UP" ? (
    <>
      <p>▶ Water flow has been started</p>
      <small>System {activeSystem} is now running</small>
    </>
  ) : (
    <>
      <p>▶ Water flow has been stopped.</p>
      <small>System {activeSystem} is now inactive.</small>
    </>
  )}
</div>

<img 
  src={action === "UP" ? waterfallUp : waterfallDown} 
  alt="water status" 
  className="popup-img"
/>
          </div>

        </div>
      )}
    </div>
  );
};

export default SystemCards;