import React from "react";

import ImageHero from "assets/images/shelter/Camping - STAR CAMP.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div
            className="col-12 col-lg-auto pr-lg-5 mb-5 mb-lg-0"
            style={{
              width: 530,
            }}
          >
            <h1 className="font-weight-bold line-height-1 mb-3">
              Explore the Outdoors,
              <br />
              Camp with Comfort
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{
                lineHeight: "170%",
              }}
            >
              We provide what you need to enjoy your, holiday with family. Time to make another memorable moments.
            </p>
            <Button className="btn px-5 button-border" hasShadow="hasShadow" isPrimary={true} onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div
              className="row"
              style={{
                marginTop: 80,
              }}
            >
              <div
                className="col-auto mr-lg-5"
              >
                <img width="36" height="36" src={require('/public/images/icon_traveler.svg').default} alt={`${props.data.travelers} Travelers `} />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
                </h6>
              </div>
              <div
                className="col-auto mr-lg-5"
              >
                <img width="36" height="36" src={require('/public/images/icon_treasure.svg').default} alt={`${props.data.treasures} Treasure `} />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">treasure</span>
                </h6>
              </div>
              <div className="col-auto mr-lg-5">
                <img width="36" height="36" src={require('/public/images/icon_cities.svg').default} alt={`${props.data.cities} Cities `} />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 pl-lg-5">
            <div className="hero-image-placeholder">
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid"
                style={{
                  zIndex: 2,
                }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with couches frame"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
