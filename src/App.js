import React from "react";
import ButtonMenu from "./components/ButtonMenu";
import imageOne from "./components/Images/imageOne.png";
function App() {
  return (
    <div className="App">
      {/* Two Towers */}
      <div className="twoTowers">
        {/* Tower Left */}
        <div className="towerLeft">
          <span className="towerLeft__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
          <span className="towerLeft__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
          <span className="towerLeft__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
        </div>
        {/* Tower Left */}
        {/* Tower Right */}
        <div className="towerRight">
          <span className="towerRight__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
          <span className="towerRight__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
          <span className="towerRight__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
          <span className="towerRight__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
          <span className="towerRight__container">
            <img src={imageOne} alt="game" />
            <img src={imageOne} alt="game" />
          </span>
        </div>
        {/* Tower Right */}
      </div>
      {/* Two Towers */}

      {/* Menu Buttons */}
      <ButtonMenu />
      {/* Menu Buttons */}
    </div>
  );
}

export default App;
