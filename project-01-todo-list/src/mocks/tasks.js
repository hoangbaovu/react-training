const uuidv4 = require('uuid/v4');

let items = [
  {
    id: uuidv4(),
    name: "Lau sàn",
    level: 2
  },
  {
    id: uuidv4(),
    name: "Quét nhà",
    level: 0
  },
  {
    id: uuidv4(),
    name: "Quét sân",
    level: 1
  }
];

export default items;  