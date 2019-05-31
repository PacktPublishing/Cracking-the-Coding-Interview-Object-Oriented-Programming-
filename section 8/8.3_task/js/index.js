/* Create 3 constructor functions:
Movie, ActionMovie and DramaMovie

ActionMovie and DramaMovie should 'inherit' Movie
Movie should take 3 arguments: movieLength, fullTitle, ageCategory. They should not be visible as parts of the instances.
Movie should have access to methods addPrequel, addSequel and getAllParts (you can add any other if needed). 
addSequel and addPrequel makes a connection between objects so that calling getAllParts method on any of the object should print names of all movies in the series. Do not add any external arrays in order to solve this task.

sample usage:

const requiemForADream = new DramaMovie(80,"Requiem For A Dream", 18);
const madMax = new ActionMovie(90,"Mad Max I", 16);
const madMax2 = new ActionMovie(120,"Mad Max II", 16);
madMax2.addPrequel(madMax);

const madMax3 = new ActionMovie(110,"Mad Max III", 16);
madMax2.addSequel(madMax3);
madMax3.getAllParts(); // prints "Mad Max I" "Mad Max II" "Mad Max III"

2. How such a data structure is called?
*/