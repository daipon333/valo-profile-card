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
    numberArr,
    setNumberArr,
  } = props;
  const [isGray, setIsGray] = React.useState(true);

  const handleGrayClick = () => {
    setIsGray(!isGray);
  };

  React.useEffect(() => {
    if (setNumberArr) {
      if (!isGray) {
        setNumberArr([...numberArr, backgroundImage]);
        console.log([...numberArr, backgroundImage]);
      } else if (isGray) {
        const idx = numberArr.indexOf(backgroundImage);
        console.log(idx);
        if (idx >= 0) {
          const newNumberArr = [...numberArr];
          newNumberArr.splice(idx, 1);
          setNumberArr(newNumberArr);
          console.log(newNumberArr);
        }
      }
    }
  }, [isGray]);

  React.useEffect(() => {
    if (numberArr)
      if (numberArr[0]) {
        const newNumberArr = [...numberArr];
        setImageChange(newNumberArr[0]);
        console.log(newNumberArr[0]);
      } else if (!numberArr[0]) {
        setImageChange(logo);
      }
  }, [numberArr]);

  return (
    <img
      src={img}
      onClick={handleGrayClick}
      key={index}
      className={isGray ? "GrayScale" : ""}
    />
  );
}

export default Images;
