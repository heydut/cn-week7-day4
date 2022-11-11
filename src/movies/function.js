const MovieCollection = require("./model");

async function createMovie(movieObject) {
  try {
    const newMovie = await MovieCollection.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
}

async function readMovie() {
  try {
    const listMovie = await MovieCollection.find({});
    for (let i = 0; i < MovieCollection.length; i++) {
      console.log(`Title = ${listMovie[i].title}`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateMovie(movieObject) {
  try {
    const replaceActor = await MovieCollection.updateOne(
      { title: movieObject.title },
      { $set: { actor: movieObject.actor } }
    );
    const replaceDirector = await MovieCollection.updateOne(
      { title: movieObject.title },
      { $set: { actor: movieObject.director } }
    );
    if (replaceActor.modifiedCount === 1) {
      console.log(`Successfully updated actor ${movieObject.actor}`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteMovie(movieObject) {
  try {
    const deletedMovie = await MovieCollection.deleteOne({
      title: movieObject.title,
    });
    console.log(deletedMovie);
    if (deletedMovie.deletedCount === 1) {
      console.log(`Successfully deleted movie ${movieObject.title}`);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createMovie, readMovie, updateMovie, deleteMovie };
