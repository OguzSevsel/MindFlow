import React, { forwardRef  } from "react";

import { Add } from '@mui/icons-material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import Button from '../../SimpleComponents/Button';
import DragButton from "../../SimpleComponents/DragButton";

import useDrag from "../../../Hooks/useDrag";

const Note = forwardRef((props, ref) => {
    
    const { containerRef } = props;

    const {position, scale, snapped, fieldRef, handleMouseDown, handleMouseMove, handleMouseUp} = useDrag(containerRef);
    
    
  return (

    <div 
    style= {{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, width: `${scale.width}px`, height: `${scale.height}px`}}
    ref={fieldRef}
    className={`Note Menus`}>

        <Button 
        className={`CircularButtons`} 
        Icon={Add} 
        isIconed={true} 
        color={"white"} 
        fontSize={40}/>

        <DragButton 
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp} 
        onMouseDown={handleMouseDown} 
        className={`Buttons`} 
        Icon={DragIndicatorIcon} 
        isIconed={true} 
        color={"white"} 
        fontSize={30}/>

    </div>
  );
});

export default Note



