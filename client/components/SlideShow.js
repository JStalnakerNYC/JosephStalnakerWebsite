import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SlideShow = () => {
  const [number, setNumber] = React.useState(3);
  const [numberTwo, setNumberTwo] = React.useState(3);
  const [numberThree, setNumberThree] = React.useState(2);
  const [numberFour, setNumberFour] = React.useState(2);
  const [numberFive, setNumberFive] = React.useState(3);
  const [numberSix, setNumberSix] = React.useState(3);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 4s
      () => setNumber(Math.floor(Math.random() * 10 + 1)),
      4000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setNumberTwo(Math.floor(Math.random() * 3 + 1)),
      5000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 6s
      () => setNumberThree(Math.floor(Math.random() * 10 + 1)),
      6000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 3s
      () => setNumberFour(Math.floor(Math.random() * 4 + 1)),
      3000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 4s
      () => setNumberFive(Math.floor(Math.random() * 3 + 1)),
      4000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 3s
      () => setNumberSix(Math.floor(Math.random() * 3 + 1)),
      3000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="slideshow-container">
        <Link to="/castings">
          <div className="slideshow-image">
            <img src={`castings/${number}.gif`} height="200px" />
          </div>
        </Link>
        <Link to="/nudes">
          <div className="slideshow-image-two">
            <img src={`nudes/${numberSix}.gif`} height="200px" />
          </div>
        </Link>
        <div className="slideshow-image">
          <img src={`guysanddollssmall/${numberTwo}.gif`} height="200px" />
        </div>
        <div className="slideshow-image">
          <img src={`thebeautifulgame/${numberThree}.gif`} height="200px" />
        </div>
        <div className="slideshow-image">
          <img src={`guysanddollslarge/${numberFour}.gif`} height="200px" />
        </div>
        <div className="slideshow-image">
          <img src={`nightscapes/${numberFive}.gif`} height="200px" />
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
