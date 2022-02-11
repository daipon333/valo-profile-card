import "../styles.css";
import React from "react";
import { Button, TextField } from "@mui/material/";

function Comment() {
  const [text, setText] = React.useState("");
  const [newText, setNewText] = React.useState("");
  const [display, setDisplay] = React.useState(true);

  const handleEditClick = () => {
    setDisplay((prev) => !prev);
  };
  const handleSubmitClick = () => {
    if (text === "") return;
    setNewText(text);
    setDisplay((prev) => !prev);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="comment-container">
        <p className="comment-title title">-COMMENT-</p>
        <div className="comment-field">
          {display ? (
            <TextField
              inputProps={{
                style: {
                  color: "white",
                  textAlign: "center",
                  fontSize: "15px",
                },
              }}
              placeholder="自由にコメントを書こう！"
              value={text}
              onChange={handleTextChange}
              id="standard-outlined-flexible"
              label="Comment"
              multiline
              maxRows={4}
              error
              variant="standard"
              fullWidth
            />
          ) : (
            <p className="new-id new-text" onClick={handleEditClick}>
              {newText}
            </p>
          )}
          {display ? (
            <div className="comment-button">
              <Button
                onClick={handleSubmitClick}
                variant="contained"
                color="error"
                size="large"
              >
                OK
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Comment;
