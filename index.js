
// Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
// Create a function that prints all properties.
// Create an object of the class and use the function.


class GitHubRepository {
    constructor(userName, fileName, descriptionofRepository, code) {
        this.userp = userName;
        this.filenamep = fileName;
        this.descriptionp = descriptionofRepository;
        this.codep = code;
    }

    printProps()
    {
        console.log(this.userp);
        console.log(this.filenamep);
        console.log(this.descriptionp);
        console.log(this.codep);
    }

}

let myRepository = new myRepository("flashfan", "blah", "largerepository", "fifteen");
myRepository.printProps();

//Problem 2:
//Create a Movie class with the following properties: movieName, rating, and yearReleased.
//Create a method to change the rating and another one to change the yearReleased properties.
//Create an object of the class and use the two methods you created.

class Movies
{
constructor(movieName, rating, yearRelease)
{
    this.moviep = movieName;
    this.ratep = rating;
    this.released = yearRelease;
}
}
// Not sure what you are trying to do here but this syntax is not right
var movieEdits =
    {
        Movie: "Avengers",
        Rating: "8/10",
        Release: "2012",
        full: function () {
            return this.Movie + " " + this.Release;
            
        }

};
// you cannot name an instance the same as the class name and instances should be lowecase (ex myInstance = new MyClass(value,value,value))
let Movies = new Movies()
movieEdits.printProps();