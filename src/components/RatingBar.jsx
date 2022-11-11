import React from "react";

function RatingBar() {
  return (
    <>
      <div className="wrapper">
        <div className="option">
          <input type="radio" id="num1" name="rating" />
          <label htmlFor="num1">1</label>
        </div>
        <div className="option">
          <input type="radio" id="num2" name="rating" />
          <label htmlFor="num2">2</label>
        </div>
        <div className="option">
          <input type="radio" id="num3" name="rating" />
          <label htmlFor="num3">3</label>
        </div>
        <div className="option">
          <input type="radio" id="num4" name="rating" />
          <label htmlFor="num4">4</label>
        </div>
        <div className="option">
          <input type="radio" id="num5" name="rating" />
          <label htmlFor="num5">5</label>
        </div>
        <div className="option">
          <input type="radio" id="num6" name="rating" />
          <label htmlFor="num6">6</label>
        </div>
        <div className="option">
          <input type="radio" id="num7" name="rating" />
          <label htmlFor="num7">7</label>
        </div>
        <div className="option">
          <input type="radio" id="num8" name="rating" />
          <label htmlFor="num8">8</label>
        </div>
        <div className="option">
          <input type="radio" id="num9" name="rating" />
          <label htmlFor="num9">9</label>
        </div>
        <div className="option">
          <input type="radio" id="num10" name="rating" />
          <label htmlFor="num10">10</label>
        </div>
      </div>
    </>
  );
}

export default RatingBar;
