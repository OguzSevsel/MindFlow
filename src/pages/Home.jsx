import React, {useState} from 'react';
import CanvasContainer from '../components/Early/CanvasContainer';
import "../components/Early/styles.css";
import AddIcon from '@mui/icons-material/Add';
import Button from '../components/Index/SimpleComponents/Button';

function Home() {

  

  return (
    <div className='BackGround'>


      <Button className={`Menus Button`} Icon={AddIcon} isIconed={true} label={"Hello"}/>
      

    </div>
  );
}

export default Home;
