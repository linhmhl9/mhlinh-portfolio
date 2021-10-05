import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Button, Link } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight, display: "block" }}
      >
        <div className="row" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <div className="d-inline">
                <img src="images/avatar.png" style={{ height: "20rem" }} />
              </div>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <div className="button-download">
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#FDD07A",
                    color: "#353239",
                    height: "4rem",
                    fontSize: "1.2rem",
                  }}
                  startIcon={<DownloadIcon />}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/12mf4VUxxE34m55-dETbqjvKpLC6SKgLo/view?usp=sharing"
                    )
                  }
                >
                  <b>Download CV</b>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
