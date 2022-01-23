import React from "react";
import { Button } from "@mui/material/";
import captureImage from "./captureImage";

function SaveButton(props) {
  const { display } = props;

  return (
    <div className="save-btn-wrapper" data-html2canvas-ignore="true">
      {display ? null : (
        <Button
          className="save-btn"
          variant="contained"
          size="small"
          color="success"
          onClick={captureImage}
        >
          SAVE
        </Button>
      )}
    </div>
  );
}

export default SaveButton;
