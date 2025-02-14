import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';

function NewNodeButton({ onAddDiv, isNear, ...props }) {
  return (
    <AnimatePresence>
      {isNear && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }} // Fade in and scale
          animate={{ opacity: 1, scale: 1 }} // Final state
          exit={{ opacity: 0, scale: 0.8 }}  // Fade out and scale down
          transition={{ duration: 0.3 }}
          style={{ 
            position: 'absolute', 
            left: '50px', 
            top: '50px', 
            width: props.width, 
            height: props.height 
        }}

        >
            <AddIcon style={{fontSize: "36px" , color: "#d3d2d2"}}/>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default NewNodeButton;
