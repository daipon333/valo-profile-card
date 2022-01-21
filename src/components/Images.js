import "../styles.css";
import React from "react";
import logo from "../images/background-image/valorant3.jpeg";

function Images(props) {
  const {
    img,
    index,
    imageChange,
    setImageChange,
    backgroundImage,
    bgiArr,
    setBgiArr,
    backgroundImageSp,
  } = props;
  const [isGray, setIsGray] = React.useState(true);

  const handleGrayClick = () => {
    setIsGray(!isGray);
  };

  React.useEffect(() => {
    if (setBgiArr) {
      if (!isGray) {
        setBgiArr([...bgiArr, backgroundImage]);
      } else if (isGray) {
        const idx = bgiArr.indexOf(backgroundImage);
        if (idx >= 0) {
          const newBgiArr = [...bgiArr];
          newBgiArr.splice(idx, 1);
          setBgiArr(newBgiArr);
        }
      }
    }
  }, [isGray]);

  React.useEffect(() => {
    if (bgiArr)
      if (bgiArr[0]) {
        const newBgiArr = [...bgiArr];
        setImageChange(newBgiArr[0]);
      } else if (!bgiArr[0]) {
        setImageChange(logo);
      }
  }, [bgiArr]);

  return (
    <img
      src={img}
      onClick={handleGrayClick}
      key={index}
      className={isGray ? "GrayScale" : "border"}
    />
  );
}

export default Images;
