import React, { useState, useEffect, useRef } from "react";
import NewButton from '../components/NewButton';
import Node from "./Nodes";

import {
    TransformWrapper,
    TransformComponent,
    useControls,
  } from "react-zoom-pan-pinch";

function Canvas({ isMenuOpen }) {
    const [divs, setDivs] = useState([]);

    // Function to add a new div to the state
    const addNewDiv = () => {
        setDivs((prevDivs) => [
            ...prevDivs,
            { id: Date.now(), content: "Hello", left: 400, top: 200 } // Initial position
        ]);
    };

    

    const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    };

    return (
        <div className={"ZoomContainer Menus"}>
             <TransformWrapper
            limitToBounds={true}
            alignmentAnimation={{ sizeX: 5, sizeY: 5 }}
            centerZoomedOut={true}
            >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                
            <>
            <Controls />
            
                <TransformComponent>
                        <div className={`Canvas ${isMenuOpen ? "shifted" : ""} Menus`}>
                            {divs.map((div) => (
                                <Node
                                    key= {div.id}
                                    content = {div.content}
                                    left= {div.left}
                                    top = {div.top}
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
