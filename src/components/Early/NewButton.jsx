import AddIcon from '@mui/icons-material/Add';

function NewButton({ onAddDiv }) {
 
    return (
        <button onClick={onAddDiv} className="NewButton">
            <AddIcon style={{fontSize: "36px" , color: "#d3d2d2"}}/>
        </button>
    );
}

export default NewButton;