class User {
    constructor (email, name) {
        this.email = email;
        this.name = name;
    }
    logOut() {
        console.log(this.name + " has logged out");
    }
    logIn() {
        console.log(this.name + " has logged in ");
    }
}
var userOne = new User('goswamisubhojit1947@gmail.com', 'subho');
var userTwo = new User('substallin@gmail.com', 'stallin');
console.log(this.userOne);
console.log(this.userTwo);
this.userOne.logIn();
this.userOne.logOut();
this.userTwo.logIn();
this.userTwo.logOut();