import { Translate } from "@mui/icons-material";
import React, {useState, useEffect, useRef} from "react";
import NewNodeButton from "./NewNodeButton";


function Node ({onAddDiv, ...props}) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isNear, setIsNear] = useState(false);
    const divRef = useRef(null);
    const PROXIMITY_THRESHOLD = 300;
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

            <NewNodeButton onAddDiv={onAddDiv} isNear={isNear} width={"50px"}/>
            
        </div>
    );
}

export default Node;