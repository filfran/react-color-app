import { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              trackStyle={{ backgroundColor: "transparent" }}
              handleStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none",
                width: "13px",
                height: "13px",
                marginLeft: "-7px",
                marginTop: "-3px",
              }}
              railStyle={{ height: 8 }}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;