import React from "react";
import ReactDom from "react-dom";

const today = new Date();
const year = today.getFullYear();

ReactDom.render(
  <div>
    <p>Created by Kandice Everett</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
