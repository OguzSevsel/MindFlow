import React from "react";

const Note = ({ id, width, height }) => {
  return (
    <div className="Note Menus drag-handle" style={{ 
      backgroundColor: "#4D4C4C", 
      width: `${width}px`, // Use the width passed from the parent
      height: `${height}px` // Use the height passed from the parent
    }}>
        Item {id}
    </div>
  );
};

export default Note;
