import "../styles.css";
import React from "react";
import logo from "../images/background-image/valorant3.jpeg";

import useWindowResize from "./useWindowResize";

function Images(props) {
  const {
    img,
    imgGray,

    setImageChange,
    setImageChangeSp,
    backgroundImage,
    bgiArr,
    setBgiArr,
    setBgiSpArr,
    bgiSpArr,
    backgroundImageSp,
    setDeleteButton,
    deleteButton,
    setSaveStanby,
    saveStanby,
  } = props;
  const [isGray, setIsGray] = React.useState(true);
  const [screenWidth] = useWindowResize();

  const handleGrayClick = () => {
    setIsGray(!isGray);
    setSaveStanby(!saveStanby ? (screenWidth ? true : false) : false);
    setDeleteButton(deleteButton ? false : false);
  };

  React.useEffect(() => {
    if (setBgiSpArr) {
      if (!isGray) {
        setBgiSpArr([...bgiSpArr, backgroundImageSp]);
        setBgiArr([...bgiArr, backgroundImage]);
      } else if (isGray) {
        const idxSp = bgiSpArr.indexOf(backgroundImageSp);
        const idx = bgiArr.indexOf(backgroundImage);
        if (idxSp >= 0) {
          const newBgiSpArr = [...bgiSpArr];
          newBgiSpArr.splice(idxSp, 1);
          setBgiSpArr(newBgiSpArr);
        }
        if (idx >= 0) {
          const newBgiArr = [...bgiArr];
          newBgiArr.splice(idx, 1);
          setBgiArr(newBgiArr);
        }
      }
    }
  }, [isGray]);

  React.useEffect(() => {
    if (bgiSpArr)
      if (bgiSpArr[0]) {
        const newBgiSpArr = [...bgiSpArr];
        setImageChangeSp(newBgiSpArr[0]);
      } else if (!bgiSpArr[0]) {
        setImageChangeSp(logo);
      }
    if (bgiArr)
      if (bgiArr[0]) {
        const newBgiArr = [...bgiArr];
        setImageChange(newBgiArr[0]);
      } else if (!bgiArr[0]) {
        setImageChange(logo);
      }
  }, [bgiSpArr, bgiArr]);

  return (
    <img
      src={isGray ? imgGray : img}
      onClick={handleGrayClick}
      className={isGray ? "" : "border"}
    />
  );
}
export default Images;
