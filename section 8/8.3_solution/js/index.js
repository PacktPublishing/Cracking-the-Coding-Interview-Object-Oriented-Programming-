function Movie(movieLength, fullTitle, ageCategory) {
  this.getData = function() {
    return {
      movieLength, fullTitle, ageCategory
    }
  }  
}

Movie.prototype.addPrequel = function(movie) {
  this.prequel = movie;
  movie.sequel = this;
}

Movie.prototype.addSequel = function(movie) {
  this.sequel = movie;
  movie.prequel = this;
}
Movie.prototype.getFirstPart = function() {
  let movie = this;
  while(movie.prequel) {
    movie = movie.prequel;
  }
  return movie;
}
Movie.prototype.getAllParts = function() {
  const allParts = [];
  let movie = this.getFirstPart();
  allParts.push(movie.getData().fullTitle)
  while (movie.sequel) {
    movie = movie.sequel;
    allParts.push(movie.getData().fullTitle)
  } 
  console.log.apply(console, allParts);
}

function ActionMovie(movieLength, fullTitle, ageCategory) {
  Movie.call(this, movieLength, fullTitle, ageCategory);
}
ActionMovie.prototype = Movie.prototype

function DramaMovie(movieLength, fullTitle, ageCategory) {
  Movie.call(this, movieLength, fullTitle, ageCategory);
}
DramaMovie.prototype = Movie.prototype

const requiemForADream = new DramaMovie(80,"Requiem For A Dream", 18);
const madMax = new ActionMovie(90,"Mad Max I", 16);
const madMax2 = new ActionMovie(120,"Mad Max II", 16);
madMax2.addPrequel(madMax);
const madMax3 = new ActionMovie(110,"Mad Max III", 16);
madMax2.addSequel(madMax3);
madMax3.getAllParts(); // prints "Mad Max I" "Mad Max II" "Mad Max III"