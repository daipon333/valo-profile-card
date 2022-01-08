import "../styles.css";
import React from "react";

function IdTag(props) {
  const {
    id,
    setId,
    newId,
    setNewId,
    tag,
    setTag,
    newTag,
    setNewTag,
    handleSubmitClick,
    display,
    setDisplay,
  } = props;

  // const [id, setId] = React.useState("");
  // const [newId, setNewId] = React.useState("");
  // const [tag, setTag] = React.useState("")
  // const [display, setDisplay] = React.useState(true);

  const handleEditClick = () => {
    setDisplay((prev) => !prev);
  };
  // const handleSubmitClick = () => {
  //   if (id === "") return;
  //   setNewId(id);
  //   setNewTag(tag);

  //   setDisplay((prev) => !prev);
  // };
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <>
      <div className="title-container">
        <h1 className="app-name">
          VALORANT
          <hr />
          Profile Card
        </h1>
      </div>
      <div className="id-container">
        <p className="id-title">ID #TAG</p>
        {display ? (
          <>
            <input
              className="id-input"
              placeholder="IDを入力"
              value={id}
              onChange={handleIdChange}
              size="55"
            />
            <input
              className="id-input"
              placeholder="TAGを入力"
              value={tag}
              onChange={handleTagChange}
              size="55"
            />
          </>
        ) : (
          <>
            <p className="new-id" onClick={handleEditClick}>
              {newId}
            </p>
            <p className="new-id" onClick={handleEditClick}>
              {newTag}
            </p>
          </>
        )}
        {display ? <button onClick={handleSubmitClick}>OK</button> : null}
      </div>
    </>
  );
}

export default IdTag;
