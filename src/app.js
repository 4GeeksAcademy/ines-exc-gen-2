/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let who = [
    "An elephant",
    "A wise man",
    "My teacher",
    "The neighbours",
    "A plane"
  ];

  let what = ["ate", "cried", "ran", "dived", "wrote"];

  let where = [
    "in the swimming pool",
    "in the sofa",
    "outside",
    "at the driveway",
    "at home"
  ];

  let when = [
    "yesterday",
    "last week",
    "1000 thousand years ago",
    "when I was born",
    "this morning"
  ];

  let whoG = who[Math.floor(Math.random() * who.length)];
  let whatG = what[Math.floor(Math.random() * what.length)];
  let whereG = where[Math.floor(Math.random() * where.length)];
  let whenG = when[Math.floor(Math.random() * when.length)];

  return `${whoG} ${whatG} ${whereG} ${whenG}.`;
}
