import * as tuitsDao from "./tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit._id = (new Date()).getTime()+'';
  newTuit.name = "NASA";
  newTuit.userName = "nasa";
  newTuit.icon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png";
  newTuit.preview = "";
  newTuit.previewTitle = "";
  newTuit.previewText = "";
  newTuit.previewLink = "";
  newTuit.topic = "Space";
  newTuit.time = "2h";
  newTuit.comment = 0;
  newTuit.retuit = 0;
  newTuit.like = 0;
  newTuit.liked = false;
  newTuit.dislike = 0;
  newTuit.disliked = false;
  newTuit.category = 4;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  tuits.sort((a, b) => b._id - a._id);
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
