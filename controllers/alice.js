const { errorHandler } = require("../utils");

exports.alice = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../alice.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"mhieu","data":`https://anime.mhieu1401.repl.co/rdfile?type=mp4`});
};