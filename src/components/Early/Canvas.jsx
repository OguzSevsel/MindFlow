import React, { useState, useEffect, useRef } from "react";
import NewButton from './NewButton';
import Node from "./Nodes";

import {
    TransformWrapper,
    TransformComponent,
    useControls,
  } from "react-zoom-pan-pinch";

function Canvas({ isMenuOpen }) {
    const [divs, setDivs] = useState([]);
    const [zoomLevel, setZoomLevel] = useState(1);

    // Function to add a new div to the state
    const addNewDiv = () => {
        console.log("created");
        
        setDivs((prevDivs) => [
            ...prevDivs,
            { id: Date.now(), content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " + 
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                 left: 300, top: 200 } // Initial position
        ]);
    };

    const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    };

    return (
        <div className={`ZoomContainer ${isMenuOpen ? "opened" : "closed"} Menus`}>
             <TransformWrapper
            limitToBounds={false}
            minScale={1}
            maxScale={2}
            smooth={true}
            centerOnInit={true}
            alignmentAnimation={{ sizeX: 5, sizeY: 5 }}
            onZoom={(ref) => {setZoomLevel(ref.state.scale); console.log('Zoom Level:', ref.state.scale); 
                document.documentElement.style.setProperty('--zoom-level', ref.state.scale);
                
                let menuOffset = isMenuOpen ? -125 : 0; // Adjust based on menu width
                ref.instance.wrapperComponent.style.transformOrigin = `${50 + menuOffset}%`;
            }} // Update zoom level on zoom change
            >
            {({ zoomIn, zoomOut, resetTransform }) => (
            <>
            <Controls />
                <TransformComponent>
                        <div className={`Canvas ${isMenuOpen ? "CanvasShrinks" : "CanvasGrows"}`}>
                            {divs.map((div) => (
                                <Node
                                    onAddDiv={addNewDiv}
                                    key= {div.id}
                                    content = {div.content}
                                    left= {div.left}
                                    top = {div.top}
                                    isMenuOpen = {isMenuOpen}
                                    zoomlevel = {zoomLevel}
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
