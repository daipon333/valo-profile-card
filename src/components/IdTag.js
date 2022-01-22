import "../styles.css";
import React from "react";
import { Button, TextField } from "@mui/material/";
import { makeStyles } from "@material-ui/styles";
import { color } from "@mui/system";

const useStyles = makeStyles({
  TextField: {
    textAlign: "center",
    color: "white",
  },
});

function IdTag(props) {
  const { handleSubmitClick, id, setId, display, setDisplay, tag, setTag } =
    props;
  const handleEditClick = () => {
    setDisplay((prev) => !prev);
  };

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
        <p className="id-title title">-ID #TAG-</p>
        <div className="TextField-container">
          {display ? (
            <div className="TextField">
              <TextField
                placeholder="例:VALO太郎"
                value={id}
                onChange={handleIdChange}
                id="outlined-id"
                label="ID"
                error
                size="small"
              />

              <TextField
                placeholder="例:12345"
                value={tag}
                onChange={handleTagChange}
                id="outlined-tag"
                label="#TAG"
                error
                size="small"
              />
            </div>
          ) : (
            <div className="new-id-container">
              <p className="new-id id1" onClick={handleEditClick}>
                {id}
              </p>
              <p className="new-id tag1" onClick={handleEditClick}>
                #{tag}
              </p>
            </div>
          )}
          {display ? (
            <Button
              onClick={handleSubmitClick}
              variant="contained"
              color="error"
              size="large"
            >
              OK
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default IdTag;
