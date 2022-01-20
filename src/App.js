import React from "react";
import "./styles.css";
import logo from "./images/background-image/valorant3.jpeg";
import IdTag from "./components/IdTag";
import Comment from "./components/Comment";
import Rank from "./components/Rank";
import Agents from "./components/Agents";
import TheBulletHit from "./components/TheBulletHit";
import getAccountApi from "./components/getAccountApi";

function App(props) {
  const [headShots, setHeadShots] = React.useState("");
  const [bodyShots, setBodyShots] = React.useState("");
  const [legShots, setLegShots] = React.useState("");
  const [id, setId] = React.useState("");
  const [display, setDisplay] = React.useState(true);
  const [tag, setTag] = React.useState("");

  const handleSubmitClick = async () => {
    if (id === "" || tag === "") return;

    setDisplay((prev) => !prev);
    console.log("開始");
    const response = await getAccountApi(id, tag);
    console.log(response);
    console.log("終了");
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
  const [imageChange, setImageChange] = React.useState(logo);
  const style = {
    backgroundImage: `url(${imageChange})`,
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div className="main-container" style={style}>
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
          />
        }
      </div>
      <div className="right-container">
        {<Agents imageChange={imageChange} setImageChange={setImageChange} />}
        {<Comment />}
      </div>
    </div>
  );
}
export default App;
