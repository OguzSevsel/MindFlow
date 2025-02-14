import { Translate } from "@mui/icons-material";
import React, {useState, useEffect, useRef} from "react";
import NewNodeButton from "./NewNodeButton";


function Node ({onAddDiv, ...props}) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isNear, setIsNear] = useState(false);
    const divRef = useRef(null);
    const PROXIMITY_THRESHOLD = 300;
    const [isVisible, setIsVisible] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    console.log(props.zoomlevel);
    

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });

            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                const divCenterX = rect.left + rect.width / 2;
                const divCenterY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(mousePos.x - divCenterX, 2) + Math.pow(mousePos.y - divCenterY, 2)
                );

                setIsNear(distance < PROXIMITY_THRESHOLD);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mousePos]);


    useEffect(() => {
        if (isNear) {
          setIsVisible(true);
          setIsHiding(false);
        } else if (isVisible) {
          setIsHiding(true);
          setTimeout(() => setIsVisible(false), 1000); // Wait for fade-out animation
        }
      }, [isNear, isVisible]);


    return (
        
        <div ref={divRef} style={{placeItems: "center", display: "grid", width: "400px", height: "400px", gridTemplateColumns: "0.5fr 2fr 0.5fr", gridTemplateRows: "0.5fr 2fr 0.5fr"}}>
            <div
                key= {props.id}
                style={{
                    gridColumn: "2",
                    gridRow: "2",
                    order: "0",
                    alignSelf: "center",
                    backgroundColor: "white",
                    width: "18rem",
                    height: "18rem",
                    left: props.left,
                    top: props.top,
                }}
                className="animated-button"
            >
                {props.content}
            </div>

            <NewNodeButton isNear={isNear} width={"50px"}/>

            {isNear && props.zoomlevel === 1 && (
                <>
                    <button
                    style={{width: "50px", height: "50px", gridColumn: "2", gridRow: "1"}}>
                    Top
                    </button>

                    <button 
                    style={{width: "50px", height: "50px",  gridColumn: "2", gridRow: "3"}}>
                    Bottom
                        </button>

                    <button
                    style={{width: "50px", height: "50px", gridColumn: "1", gridRow: "2"}}>
                    Left
                    </button>


                    <button
                    style={{width: "50px", height: "50px",  gridColumn: "3", gridRow: "2"}}>
                    Right
                    </button>
                </>
            )}
        </div>
        
             
    );
}

export default Node;