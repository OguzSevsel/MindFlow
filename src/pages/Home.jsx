import React, { useState } from "react";
import Button from '../components/Index/SimpleComponents/Button';
import { Add } from '@mui/icons-material';
import GridLayoutComponent from "./GridLayoutComponent";
import '../components/Index/styles.css';

function Home() {
  const [layout, setLayout] = useState([
    
  ]);

  const addNewItem = () => {
    const newItem = {
      i: `${layout.length + 1}`, // Ensure a unique ID
      x: 0,
      y: layout.length * 2,  // Position it below existing items
      w: 1,
      h: 1,
    };

    setLayout(prevLayout => [...prevLayout, newItem]); // Add new item to layout
  };

  return (
    <div className='BackGround'>
      <Button
        className={`CircularButtons`}
        onClick={addNewItem}
        Icon={Add}
        isIcon={true}
        color={"white"}
        fontSize={40}
      />

      <GridLayoutComponent layout={layout} setLayout={setLayout} />
    </div>
  );
}

export default Home;
