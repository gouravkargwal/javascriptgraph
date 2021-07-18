"use strict mode";

const user = [
  {
    user: "A",
    amount: 30,
    barColor: "#AAAAAA",
  },
  {
    user: "B",
    amount: 25,
    barColor: "#A4EBF3",
  },
  {
    user: "C",
    amount: 15,
    barColor: "#CCF2F4",
  },
  {
    user: "D",
    amount: 30,
    barColor: "#F4F9F9",
  },
];

//Setting Up Canvas
const canvas = document.querySelector("canvas");
canvas.height = 300;
canvas.width = 500;
const ctx = canvas.getContext("2d");

const barGraph = function (x, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, 200 - height, width, height);
};
const xText = function (x, id) {
  ctx.font = `15px Arial`;
  ctx.fillStyle = "#053742";
  ctx.fillText(`${id}`, x, 50);
};
const yMarkings = function () {
  for (let i = 190; i >= 150; i -= 10) {
    ctx.moveTo(45, i);
    ctx.lineTo(55, i);
    ctx.strokeStyle = "#402218";
    ctx.stroke();
    ctx.fillText(5, 30, 195);
  }
};

//Setting Up Graph
//X-Axis
ctx.moveTo(40, 200);
ctx.lineTo(400, 200);

ctx.strokeStyle = "#402218";
ctx.stroke();

//Y-Axis
ctx.moveTo(50, 200);
ctx.lineTo(50, 40);

ctx.strokeStyle = "#402218";
ctx.stroke();

yMarkings();

//Creating Graph

for (let i = 1; i < user.length + 1; i++) {
  barGraph(60 * i, 50, user[i - 1].amount, user[i - 1].barColor);
  xText(60 * i, user[i - 1].user);
}
