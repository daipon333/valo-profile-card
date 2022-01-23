import React from "react";
import { Button } from "@mui/material/";
import html2canvas from "html2canvas";
import useWindowResize from "./useWindowResize";
import logo from "../images/background-image/valorant3.jpeg";

function SaveButton(props) {
  const {
    display,
    setImageChangeSp,
    imageChange,
    imageChangeSp,
    deleteButton,
    setDeleteButton,
    saveStandby,
    setSaveStanby,
  } = props;
  const [screenWidth] = useWindowResize();

  function saveImageChange() {
    setImageChangeSp(imageChange);
    setSaveStanby(true);
    setDeleteButton(true);
  }

  function returnImageChange() {
    setImageChangeSp(imageChangeSp);
  }

  function captureImageClick() {
    html2canvas(document.querySelector("#capture"), {
      windowWidth: 1600,
      windowHeight: 900,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = `MyProfile.png`;
      link.click();
    });
    setSaveStanby(false);
    setDeleteButton(false);
  }

  return (
    <div className="save-btn-container">
      {!screenWidth ? (
        !display ? (
          !deleteButton ? (
            <div className="preview-btn" data-html2canvas-ignore="true">
              <Button
                variant="contained"
                size="small"
                color="success"
                onClick={saveImageChange}
              >
                保存ボタンを表示
              </Button>
            </div>
          ) : null
        ) : null
      ) : null}
      <div className="save-btn" data-html2canvas-ignore="true">
        {!display ? (
          saveStandby ? (
            screenWidth ? (
              <Button
                variant="contained"
                size="small"
                color="success"
                onClick={captureImageClick}
              >
                保存
              </Button>
            ) : (
              <Button
                variant="contained"
                size="small"
                color="success"
                onClick={captureImageClick}
              >
                保存
              </Button>
            )
          ) : null
        ) : null}
      </div>
    </div>
  );
}

export default SaveButton;
