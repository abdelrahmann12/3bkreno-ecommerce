import React from "react";
import "./Category.css"

export default function Category() {
  return (
    <div className="category">
      <div className="heading text-center">
        <h3 >Categories</h3>
      </div>
      <div className="cats flex justify-around items-center ">

        <div className="cat-puzzle cat">
          <div className="overlay"></div>
          <div className="details">
            <h4>Puzzle</h4>
          </div>
        </div>
        <div className="cat-boys cat">
          <div className="overlay"></div>
          <div className="details">
            <h4>boys Toys</h4>
          </div>
        </div>
        <div className="cat-girls cat">
          <div className="overlay"></div>
          <div className="details">
            <h4>girls toys</h4>
          </div>
        </div>
        <div className="cat-ramadan cat">
          <div className="overlay"></div>
          <div className="details">
            <h4>Ramadan</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
