import React from "react";
import ReactGridLayout from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Note from '../components/Index/Canvas/Notes/Note';

const GridLayoutComponent = ({ layout, setLayout }) => {
  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);  // Update layout when items are moved or resized
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={9}
        rowHeight={200}
        maxRows={3}
        width={1800}
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={handleLayoutChange} // Update the layout on changes
        draggableHandle=".drag-handle" // Make sure it's draggable
      >
        {layout.map(item => (
          <div key={item.i} data-grid={item}>
            <Note 
              id={item.i} 
              width={item.w * 190}
              height={item.h * 200}
            />
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};

export default GridLayoutComponent;
