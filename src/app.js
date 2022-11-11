require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const {
  createMovie,
  readMovie,
  updateMovie,
  deleteMovie,
} = require("./movies/function");

async function myApp(yargsObject) {
  if (yargsObject.create) {
    // code for create
    await createMovie({
      title: yargsObject.title,
      actor: yargsObject.actor,
      director: yargsObject.director,
    });
  } else if (yargsObject.read) {
    // code for read
    await readMovie();
  } else if (yargsObject.update) {
    // code for update
    await updateMovie({
      title: yargsObject.title,
      actor: yargsObject.actor,
      director: yargsObject.director,
    });
  } else if (yargsObject.delete) {
    // code for read
    await deleteMovie({
      title: yargsObject.title,
    });
  } else {
    console.log("Command not recognised");
  }

  await mongoose.disconnect();
}

myApp(yargs.argv);
