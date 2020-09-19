const mongoose = require("mongoose");

const jokeSchema = mongoose.Schema(
   {
      joke: { type: String, required: true },
      response: { type: String },
      author: { type: String },
      tags: { type: Array },
   },
   { timestamps: true }
);

jokeSchema.method({
   transform: function () {
      let obj = this.toObject();

      // change "_id" into "id"
      obj["id"] = obj["_id"];
      delete obj["_id"];
      // Change "__v" into "version"
      obj["version"] = obj["__v"];
      delete obj["__v"];

      obj = sort(obj);

      return obj;
   },
});

function sort(joke) {
   let sortedKeys = Object.keys(joke).sort();
   let sortedJoke = {};

   sortedKeys.forEach((key) => {
      sortedJoke[key] = joke[key];
   });

   return sortedJoke;
}

module.exports = mongoose.model("Joke", jokeSchema);
