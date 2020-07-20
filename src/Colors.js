let colors = [
  {color: "#FF4136", word: "RED", value: 0},
  {color: "#FF851B", word: "ORANGE", value: 1},
  {color: "#FFDC00", word: "YELLOW", value: 2},
  {color: "#2ECC40", word: "GREEN", value: 3},
  {color: "#0074D9", word: "BLUE", value: 4},
  {color: "#B10DC9", word: "PURPLE", value: 5},
]

let colorsReg = [
  {color: "#FF0000", word: "RED", value: 0},
  {color: "#FF6600", word: "ORANGE", value: 1},
  {color: "#FFFF00", word: "YELLOW", value: 2},
  {color: "#00FF00", word: "GREEN", value: 3},
  {color: "#0000FF", word: "BLUE", value: 4},
  {color: "#AA00FF", word: "PURPLE", value: 5},
]

let colorsRandom = [
  colorsReg[2],
  colorsReg[1],
  colorsReg[5],
  colorsReg[3],
  colorsReg[0],
  colorsReg[4],
]

export {colorsRandom as ColorsRandom, colorsReg as Colors}
export default colorsReg