import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CanvasContainer from '../components/CanvasContainer';
import "../components/styles.css";

function Home() {
  return (
    <div className='BackGround'>
      <CanvasContainer/>
    </div>
  );
}

export default Home;
