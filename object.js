function User(email, name) { //this is how basically the constructor that we specified in class actually works under the hood , this is what we know as prototyping
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email + " has logged in ");
    }
}

var userOne = new User('goswamisubhojit1947@gmail.com', 'subho');
var userTwo = new User('substallin@gmail.com', 'stallin');

console.log(userOne);
userTwo.login();
