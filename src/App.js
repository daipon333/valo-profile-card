import React, { useCallback, useEffect } from "react";
import "./styles.css";
import logo from "./images/background-image/valorant3.jpeg";
import IdTag from "./components/IdTag";
import Comment from "./components/Comment";
import Rank from "./components/Rank";
import Agents from "./components/Agents";
import TheBulletHit from "./components/TheBulletHit";
import getAccountApi from "./components/getAccountApi";
import useWindowResize from "./components/useWindowResize";
import SaveButton from "./components/SaveButton";

function App(props) {
  const [headShots, setHeadShots] = React.useState("");
  const [bodyShots, setBodyShots] = React.useState("");
  const [legShots, setLegShots] = React.useState("");
  const [id, setId] = React.useState("");
  const [display, setDisplay] = React.useState(true);
  const [tag, setTag] = React.useState("");
  const [progress, setProgress] = React.useState(false);
  const [imageChange, setImageChange] = React.useState(logo);
  const [imageChangeSp, setImageChangeSp] = React.useState(logo);
  const [screenWidth] = useWindowResize();

  const handleSubmitClick = async () => {
    if (id === "" || tag === "") return;

    setDisplay((prev) => !prev);
    setProgress(true);
    const response = await getAccountApi(id, tag);
    setProgress(false);

    const player = response.data.data.map((matchPlayer) => {
      return matchPlayer.players.all_players.find((myPlayer) => {
        return myPlayer.name === id;
      });
    });
    const headStats = player.map((stats) => {
      if (stats.stats.headshots) {
        return (
          (stats.stats.headshots /
            (stats.stats.bodyshots +
              stats.stats.legshots +
              stats.stats.headshots)) *
          100
        );
      }
    });
    const bodyStats = player.map((stats) => {
      if (stats.stats.bodyshots) {
        return (
          (stats.stats.bodyshots /
            (stats.stats.bodyshots +
              stats.stats.legshots +
              stats.stats.headshots)) *
          100
        );
      }
    });
    const legStats = player.map((stats) => {
      if (stats.stats.legshots) {
        return (
          (stats.stats.legshots /
            (stats.stats.bodyshots +
              stats.stats.legshots +
              stats.stats.headshots)) *
          100
        );
      }
    });
    const newHeadStats = headStats.filter((v) => v);
    const newBodyStats = bodyStats.filter((v) => v);
    const newLegStats = legStats.filter((v) => v);

    const resultHead =
      newHeadStats.reduce((prev, current) => prev + current) /
      newHeadStats.length;
    const resultBody =
      newBodyStats.reduce((prev, current) => prev + current) /
      newBodyStats.length;
    const resultLeg =
      newLegStats.reduce((prev, current) => prev + current) /
      newLegStats.length;

    setHeadShots(Math.round(resultHead * 100) / 100);
    setBodyShots(Math.round(resultBody * 100) / 100);
    setLegShots(Math.round(resultLeg * 100) / 100);
  };

  const style = {
    backgroundImage: `url(${screenWidth ? imageChange : imageChangeSp})`,
    backgroundSize: "cover",
    width: "100%",
    backgroundPosition: "center",
  };

  return (
    <div id="capture" className="main-container" style={style}>
      <div className="main-container-inner">
        <div className="left-container">
          {
            <IdTag
              handleSubmitClick={handleSubmitClick}
              id={id}
              setId={setId}
              tag={tag}
              setTag={setTag}
              display={display}
              setDisplay={setDisplay}
            />
          }
          {<Rank />}
          {
            <TheBulletHit
              headShots={headShots}
              bodyShots={bodyShots}
              legShots={legShots}
              display={display}
              progress={progress}
            />
          }
        </div>
        <div className="right-container">
          {
            <Agents
              imageChange={imageChange}
              setImageChange={setImageChange}
              imageChangeSp={imageChangeSp}
              setImageChangeSp={setImageChangeSp}
            />
          }
          {<Comment />}
        </div>
        <SaveButton display={display} />
      </div>
    </div>
  );
}
export default App;
