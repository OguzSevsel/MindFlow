import React, { useRef } from 'react';
import "../components/Index/styles.css";
import Note from '../components/Index/Canvas/Notes/Note';

function Home() {

  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className='BackGround'>

      <Note containerRef={containerRef}/>
      <Note containerRef={containerRef}/>
      <Note containerRef={containerRef}/>
      <Note containerRef={containerRef}/>
      <Note containerRef={containerRef}/>


    </div>
  );
}

export default Home;
