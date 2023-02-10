/*eslint-env browser*/

//PART-1

var favMovies = ["RRR", "The Spiderman", "Mission Impossible", "KingsMen", "The Conjuring"];
window.console.log(favMovies[1]);

//PART-2

var movies = new Array(5);
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
window.console.log(movies[0]);

//PART-3

var movies = new Array(5);
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies.splice(2,0, "Transformers");
window.console.log(movies.length);

//PART-4

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
delete movies[0];
window.console.log(movies);

//PART-5

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
for (var i in movies) {
    window.console.log(movies[i]);
}

//PART-6

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
for (var j of movies) {
    window.console.log(j);
}

//PART-7

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
movies.sort();
for (var k of movies) {
    window.console.log(k);
}

//STEP-8

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
window.console.log("\nMovies I like:\n\n" + movies.join("\n") + "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//STEP-9

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
movies = movies.concat(leastFavMovies);
window.console.log(movies.sort().reverse());

//STEP-10

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.pop());

//STEP-11

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.shift());

//STEP-12

var movies = [];
movies[0] = "Frozen";
movies[1] = "Batman";
movies[2] = "Spy";
movies[3] = "Black Panther";
movies[4] = "Avengers"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
movies = movies.concat(leastFavMovies);
var leastFavIndex = [];
for (var i = 0; i < movies.length; i++) {
    if (leastFavMovies.indexOf(movies[i]) !== -1) {
        leastFavIndex.push(i);
    }
}
for (var j = 0; j < leastFavIndex.length; j++) {
    movies[leastFavIndex[j]] = "";
}
var newFavMovies = ["Inception", "RRR", "Amigos"];
for (var k = 0; k <leastFavIndex.length; k++) {
    movies[leastFavIndex[k]] = newFavMovies[k];
}
window.console.log(movies);
 
//STEP-13

var movies = [["Frozen", 1], ["Batman", 2], ["Spy", 3], ["Avengers", 4], ["Transformers", 5]];
var names = movies.filter(function (movie) {
    return typeof movie[0] === 'string';
});
window.console.log(names.map(function (movie) {
    return movie[0];
}));

//STEP-14

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function (emp) {
    window.console.log("Employees: \n\n");
    for (var i = 0; i < emp.length; i++) {
        window.console.log(emp[i]);
    }
};
showEmployee(employees);

//STEP-15

function filterValues(arr) {
    return arr.filter(function(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP-16

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
var no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(randomItem(no));

//STEP-17

function largestNumber(arr) {
    return Math.max(...arr);
}
var no = [23, 43, 1, 3, 78, 98, 67, 19, 46, 89];
window.console.log(largestNumber(no));

