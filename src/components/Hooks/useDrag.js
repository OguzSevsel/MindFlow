// useDrag.js
import { useState, useRef, useEffect, forwardRef } from 'react';

const useDrag = (containerRef) => {
    const [draggingItem, setDraggingItem] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [offSet, setOffSet] = useState({ x: 0, y: 0 });
    const [isDragging, setDrag] = useState(false);
    const [scale, setScale] = useState({width: 250, height: 250});
    const [snapped, setSnap] = useState(false);
    const fieldRef = useRef(null);
    var draggedRect = null;
    var containerRect = null;


    useEffect(() => {
        if (draggingItem) {
            draggingItem.style.position = 'fixed';
            draggingItem.style.left = `${position.x}px`;
            draggingItem.style.top = `${position.y}px`;
        }
    }, [draggingItem, position]);

    useEffect(() => {
        if (draggingItem) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [draggingItem]);

    const handleMouseDown = (event) => {
        setDrag(true);

        setDraggingItem(fieldRef.current);

        draggedRect = fieldRef.current.getBoundingClientRect();

        setScale({width: 250, height: 250});

        const offSetX = event.clientX - draggedRect.left;
        const offSetY = event.clientY - draggedRect.top;

        setOffSet({ x: offSetX, y: offSetY });
    };

    const handleMouseUp = () => {
        setDrag(false);
        setDraggingItem(null);
        setSnap(false);
    };

    const handleMouseMove = (event) => {
        if (draggingItem && isDragging) {

            draggedRect = fieldRef.current.getBoundingClientRect();
            containerRect = containerRef.current.getBoundingClientRect();
            
            const newX = event.clientX - offSet.x;
            const newY = event.clientY - offSet.y;
            setPosition({ x: newX, y: newY });

            const right = newX + draggedRect.width;
            const left = newX;
            const top = newY;
            const bottom = newY + draggedRect.height;
            
            const SnapLeft = containerRect.left;
            const SnapRight = containerRect.right - draggedRect.width;
            const SnapTop = containerRect.top;
            const SnapBottom = containerRect.bottom - draggedRect.height;

            const cellSizeX = containerRect.width / 5;
            const cellSizeY = containerRect.height / 5;
            
            if (right > containerRect.right && top < containerRect.top) {
                setPosition({x: SnapRight, y: SnapTop});
                setScale({width: containerRect.width, height: containerRect.height});
                setSnap(!snapped);
            }
            else if (left < containerRect.left && top < containerRect.top) {
                setPosition({x: SnapLeft, y: SnapTop});
                setScale({width: containerRect.width, height: containerRect.height});
                setSnap(!snapped);
            }
            else if (right > containerRect.right && bottom > containerRect.bottom) {
                setPosition({x: SnapRight, y: SnapBottom});
                setScale({width: containerRect.width, height: containerRect.height});
                setSnap(!snapped);
            }
            else if (left < containerRect.left && bottom > containerRect.bottom) {
                setPosition({x: SnapLeft, y: SnapBottom});
                setScale({width: containerRect.width, height: containerRect.height});
                setSnap(!snapped);
            }
            else {
                if (left < containerRect.left) {
                    setPosition({x: SnapLeft, y: newY});
                    setScale({width: cellSizeX, height: cellSizeY});
                    setSnap(!snapped);
                }
                if (right > containerRect.right) {
                    setPosition({x: SnapRight, y: newY});
                    setScale({width: cellSizeX, height: cellSizeY});
                    setSnap(!snapped);
                }
                if (top < containerRect.top) {
                    setPosition({x: newX, y: SnapTop});
                    setScale({width: cellSizeX, height: cellSizeY});
                    setSnap(!snapped);
                }
                if (bottom > containerRect.bottom) {
                    setPosition({x: newX, y: SnapBottom});
                    setScale({width: cellSizeX, height: cellSizeY});
                    setSnap(!snapped);
                }
            }
        }
    };

    return {
        fieldRef,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        position,
        scale,
        snapped,
        isDragging
    };
};

export default useDrag;
