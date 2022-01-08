import "../styles.css";
import React from "react";

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
        <p className="comment-title">COMMENT</p>
        {display ? (
          <textarea
            placeholder="自由にコメントを書こう！"
            value={text}
            onChange={handleTextChange}
          />
        ) : (
          <p className="new-id" onClick={handleEditClick}>
            {newText}
          </p>
        )}
        {display ? <button onClick={handleSubmitClick}>OK</button> : null}
      </div>
    </>
  );
}

export default Comment;
