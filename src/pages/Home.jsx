import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/Navbar";
import Canvas from "../components/Canvas";
import SideMenu from "../components/SideMenu";
import "../components/styles.css";

function Home() {

  const [isMenuOpen, setMenu] = useState(false);

  function toggleMenu() {
      setMenu(!isMenuOpen);
  }

  return (
    <div className='BackGround'>

      <NavBar toggleMenu={toggleMenu} />
      <SideMenu isMenuOpen={isMenuOpen} />
      <Canvas isMenuOpen={isMenuOpen} />

    </div>
  );
}

export default Home;
