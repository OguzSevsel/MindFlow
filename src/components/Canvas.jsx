import React, { useState, useEffect, useRef } from "react";
import NewButton from '../components/NewButton';

function Canvas({ isMenuOpen }) {
    const [divs, setDivs] = useState([]);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [draggingDiv, setDraggingDiv] = useState(null); // To keep track of the currently dragged div
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Offset to make dragging smooth
    const canvasRef = useRef(null); // Ref to track the Canvas element

    // Function to add a new div to the state
    const addNewDiv = () => {
        setDivs((prevDivs) => [
            ...prevDivs,
            { id: Date.now(), content: "Hello", left: 50, top: 50 } // Initial position
        ]);
    };

    // Function to start dragging a div
    const handleMouseDown = (event, div) => {
        const offsetX = event.clientX - div.left;
        const offsetY = event.clientY - div.top;
        setDragOffset({ x: offsetX, y: offsetY });
        setDraggingDiv(div);
    };

    // Function to handle mouse movement while dragging
    const handleMouseMove = (event) => {
        if (!draggingDiv) return;

        // Get the bounding box of the canvas element
        const canvasRect = canvasRef.current.getBoundingClientRect();

        // Calculate the new position based on mouse movement and offset
        let newLeft = event.clientX - dragOffset.x;
        let newTop = event.clientY - dragOffset.y;

        // Make sure the div stays within the bounds of the canvas
        const maxLeft = canvasRect.width - 100; // Assuming div width is 100px
        const maxTop = canvasRect.height - 100; // Assuming div height is 50px

        // Clamp the position to stay within bounds
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        // Update the position of the dragged div
        setDivs((prevDivs) =>
            prevDivs.map((div) =>
                div.id === draggingDiv.id
                    ? { ...div, left: newLeft, top: newTop }
                    : div
            )
        );
    };

    // Function to stop dragging
    const handleMouseUp = () => {
        setDraggingDiv(null); // Stop dragging
    };

    // Handle zooming with mouse wheel
    const handleWheel = (event) => {
        if (!canvasRef.current) return;

        // Get the bounding box of the canvas element
        const canvasRect = canvasRef.current.getBoundingClientRect();
        const isInsideCanvas =
            event.clientX >= canvasRect.left &&
            event.clientX <= canvasRect.right &&
            event.clientY >= canvasRect.top &&
            event.clientY <= canvasRect.bottom;

        // Only zoom if the cursor is inside the canvas
        if (isInsideCanvas) {
            event.preventDefault();
            if (event.deltaY < 0) {
                // Zoom in (scroll up)
                setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Max zoom to 2
            } else {
                // Zoom out (scroll down)
                setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Min zoom to 1
            }
        }
    };

    // Add event listener for mouse wheel when the component mounts
    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });

        // Add event listeners for mouse move and mouse up on the window
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [draggingDiv, dragOffset]);

    return (
        <div
            ref={canvasRef}
            className={`Canvas ${isMenuOpen ? "shifted" : ""} ScrollBar`}
        >
            <NewButton onAddDiv={addNewDiv} />

            {/* Render all created divs */}
            {divs.map((div) => (
                <div
                    key={div.id}
                    className="created-div"
                    style={{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: "center",
                        position: "absolute",
                        left: `${div.left}px`,
                        top: `${div.top}px`,
                        backgroundColor: "white",
                        width: "100px",
                        height: "100px"
                    }}
                     // Start dragging
                >
                    <button style={{cursor: "move", width: "25px", height: "25px"}} onMouseDown={(e) => handleMouseDown(e, div)}></button>
                    {div.content}
                </div>
            ))}
        </div>
    );
}

export default Canvas;
