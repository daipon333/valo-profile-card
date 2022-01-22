import "../styles.css";
import React from "react";
import logo from "../images/background-image/valorant3.jpeg";
import { useMediaQuery } from "react-responsive";

function Images(props) {
  const {
    img,
    index,
    imageChange,
    setImageChange,
    imageChangeSp,
    setImageChangeSp,
    backgroundImage,
    bgiArr,
    setBgiArr,
    setBgiSpArr,
    bgiSpArr,
    backgroundImageSp,
  } = props;
  const [isGray, setIsGray] = React.useState(true);

  const handleGrayClick = () => {
    setIsGray(!isGray);
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

  // React.useEffect(() => {
  //   if (setBgiArr) {
  //     if (!isGray) {
  //       setBgiArr([...bgiArr, backgroundImage]);
  //     } else if (isGray) {
  //       const idx = bgiArr.indexOf(backgroundImage);
  //       if (idx >= 0) {
  //         const newBgiArr = [...bgiArr];
  //         newBgiArr.splice(idx, 1);
  //         setBgiArr(newBgiArr);
  //       }
  //     }
  //   }
  // }, [isGray]);

  // React.useEffect(() => {
  //   if (bgiArr)
  //     if (bgiArr[0]) {
  //       const newBgiArr = [...bgiArr];
  //       setImageChange(newBgiArr[0]);
  //     } else if (!bgiArr[0]) {
  //       setImageChange(logo);
  //     }
  // }, [bgiArr]);

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
