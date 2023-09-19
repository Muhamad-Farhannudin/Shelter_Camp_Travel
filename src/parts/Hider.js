import React, { useState } from "react";
import Button from "../elements/Button";
import BrandIcon from "../parts/IconText";
import Fade from "react-reveal/Fade";

export default function Hider() {
  const [isActive, setActive] = useState(false);

  const stylingUI = isActive ? { position: "absolute", left: -16, right: -16, padding: "0 16px" } : {};
  return (
    <Fade>
      <header className="spacing-sm" style={{ zIndex: 10 }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />

            <button className="navbar-toggler" type="button" onClick={() => setActive(prev => !prev)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={["collapse navbar-collapse", isActive ? "show" : "",].join(" ")}>
              <ul className="navbar-nav ml-auto bg-white" style={stylingUI}>
                <li>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  )
}
