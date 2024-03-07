// Importing necessary components and styles
import { Button, CircularProgress } from "@mui/material";
import React from "react";
import "../Styles/Components/BackNextButton.css"; // Importing styles for the component

// BackNextButton functional component
const BackNextButton = (props) => {
  return (
    // Container for back and next buttons
    <div className="back-next-btn-cont">
      {/* Conditional rendering: Render back button if tab is not 0 */}
      {props.tab === 0 ? null : (
        <Button
          onClick={props.onBack} // Back button click handler
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined">
          {props.backTitle} {/* Display back button title */}
        </Button>
      )}
      {/* Conditional rendering: Render circular progress if loading is true, otherwise render next button */}
      {props.loading ? (
        <CircularProgress size={25} /> // Display circular progress
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle} {/* Display next button title */}
        </Button>
      )}
    </div>
  );
};

export default BackNextButton; // Exporting BackNextButton component
