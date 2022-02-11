import React from "react";
import { Button } from "@mui/material/";
import html2canvas from "html2canvas";
import useWindowResize from "./useWindowResize";
import { TwitterButton } from "./TwitterButton";

function SaveButton(props) {
  const {
    display,
    setImageChangeSp,
    imageChange,
    deleteButton,
    setDeleteButton,
    saveStandby,
    setSaveStanby,
  } = props;
  const [screenWidth] = useWindowResize();
  const [twitterSwitch, setTwitterSwitch] = React.useState(false);

  function saveImageChange() {
    setImageChangeSp(imageChange);
    setDeleteButton(!deleteButton ? true : false);
    setSaveStanby(!saveStandby ? true : false);
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

    setDeleteButton(!screenWidth ? false : false);
    setSaveStanby(false);
    setTwitterSwitch(true);
  }

  return (
    <>
      <div className="save-btn-container" data-html2canvas-ignore="true">
        {!screenWidth ? (
          !display ? (
            !deleteButton ? (
              <Button
                variant="contained"
                size="small"
                color="success"
                onClick={saveImageChange}
              >
                保存ボタンを表示
              </Button>
            ) : null
          ) : null
        ) : null}
        {!display ? (
          saveStandby ? (
            <Button
              id="caputure-btn"
              variant="contained"
              size="small"
              color="success"
              onClick={captureImageClick}
            >
              保存
            </Button>
          ) : null
        ) : null}
      </div>
      {twitterSwitch ? (
        <TwitterButton
          twitterSwitch={twitterSwitch}
          setTwitterSwitch={setTwitterSwitch}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SaveButton;
