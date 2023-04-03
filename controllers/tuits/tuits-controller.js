import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit.name = "NASA";
  newTuit.userName = "nasa";
  newTuit.icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png";
  newTuit.preview = "";
  newTuit.previewTitle = "";
  newTuit.previewText = "";
  newTuit.previewLink = "";
  newTuit.topic = "Space";
  newTuit.time = "2h";
  newTuit.comment = 0;
  newTuit.retuit = 0;
  newTuit._id = new Date().getTime() + "";
  newTuit.like = 0;
  newTuit.liked = false;
  newTuit.dislike = 0;
  newTuit.disliked = false;
  newTuit.category = 4;
  tuits.unshift(newTuit);
  res.json(newTuit);
};

const findTuits = (req, res) => {
  res.json(tuits);
};

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
  tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  res.sendStatus(200);
};

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
