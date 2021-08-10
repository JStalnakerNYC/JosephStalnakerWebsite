import React, { useEffect } from "react";

// let num = Math.floor(Math.random() * 10) + 1;

const SlideShow = () => {
  const [number, setNumber] = React.useState(0);
  const [numberTwo, setNumberTwo] = React.useState(0);
  const [numberThree, setNumberThree] = React.useState(0);
  const [numberFour, setNumberFour] = React.useState(0);

  React.useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setNumber(Math.floor(Math.random() * 10 + 1)),
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
      // set number every 5s
      () => setNumberThree(Math.floor(Math.random() * 10 + 1)),
      8000
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
      () => setNumberFour(Math.floor(Math.random() * 4 + 1)),
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
        <div className="slideshow-image">
          <img src={`castings/${number}.gif`} height="250px" />
        </div>
        <div className="slideshow-image-two">
          <img src={`guysanddollssmall/${numberTwo}.jpg`} height="250px" />
        </div>
        <div className="slideshow-image-three">
          <img src={`thebeautifulgame/${numberThree}.jpg`} height="250px" />
        </div>
        <div className="slideshow-image-three">
          <img src={`guysanddollslarge/${numberFour}.jpg`} height="250px" />
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
