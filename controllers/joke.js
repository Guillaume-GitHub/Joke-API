const Joke = require("../models/joke.js");

exports.create = (req, res, next) => {
   // add POST method logic
   delete req.body._id;
   const jokeObject = JSON.parse(JSON.stringify(req.body));
   const newJoke = new Joke({
      ...jokeObject,
   });

   newJoke
      .save(newJoke)
      .then((doc) => res.status(201).json(doc))
      .catch((error) => res.status(400).json(error));
};

exports.getById = (req, res, next) => {
   // add GET method logic
   Joke.findById(req.params.id)
      .then((doc) => res.status(200).json(doc.transform()))
      .catch((err) => res.sendStatus(err.kind === "ObjectId" ? 404 : 500));
};

exports.getAll = (req, res, next) => {
   // add GET method logic
   Joke.find()
      .then((docs) => {
         let jokes = [];
         for (let i = 0; i < docs.length; i++) {
            jokes.push(docs[i].transform());
         }
         res.status(200).json({ jokes: jokes, totalItems: jokes.length });
      })
      .catch((error) => res.status(500).json(error));
};

exports.delete = (req, res, next) => {
   // add DELETE method logic
   Joke.findOneAndDelete({ _id: req.params.id })
      .then((doc) => res.sendStatus(doc ? 204 : 404))
      .catch((err) => res.sendStatus(err.kind === "ObjectId" ? 404 : 500));
};

exports.put = (req, res, next) => {
   // add PUT method logic
   res.sendStatus(204);
};

exports.default = (req, res, next) => {
   res.sendStatus(400);
};
