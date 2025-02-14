import React, { useState, useEffect, useRef } from "react";
import NewButton from '../components/NewButton';
import Node from "./Nodes";

import {
    TransformWrapper,
    TransformComponent,
    useControls,
  } from "react-zoom-pan-pinch";
import { isMuiElement } from "@mui/material";

function Canvas({ isMenuOpen }) {
    const [divs, setDivs] = useState([]);
    const [zoomLevel, setZoomLevel] = useState(1);

    // Function to add a new div to the state
    const addNewDiv = () => {
        setDivs((prevDivs) => [
            ...prevDivs,
            { id: Date.now(), content: "Hello", left: 1600, top: 200 } // Initial position
        ]);
    };

    const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    };

    return (
        <div className={`ZoomContainer ${isMenuOpen ? "opened" : "closed"} Menus`}>
             <TransformWrapper
            limitToBounds={false}
            centerOnInit={true}
            minScale={1}
            maxScale={2}
            smooth={true}
            alignmentAnimation={{ sizeX: 5, sizeY: 5 }}
            onZoom={(ref) => {setZoomLevel(ref.state.scale); console.log('Zoom Level:', ref.state.scale); 
                document.documentElement.style.setProperty('--zoom-level', ref.state.scale);
            }} // Update zoom level on zoom change
            >
            {({ zoomIn, zoomOut, resetTransform }) => (
            <>
            <Controls />
                    <TransformComponent>
                            <div className={`Canvas ${isMenuOpen ? "CanvasShrinks" : "CanvasGrows"} Menus`}>
                                {divs.map((div) => (
                                    <Node
                                        key= {div.id}
                                        content = {div.content}
                                        left= {div.left}
                                        top = {div.top}
                                        isMenuOpen = {isMenuOpen}
                                    />
                                ))}
                            </div>
                    </TransformComponent>
            
            <NewButton onAddDiv={addNewDiv} /> 
            </>
            )}
            </TransformWrapper>
        </div>
    );
}

export default Canvas;
