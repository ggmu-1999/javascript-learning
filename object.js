class User {
    constructor (email, name, score) {
        this.email = email;
        this.name = name;
        this.score = score;
    }
    logOut() {
        console.log(this.name + " has logged out");
        return this;
    }
    logIn() {
        console.log(this.name + " has logged in ");
        return this;
    }
    updateScore() {
        console.log(this.name + " has " + this.score + " score");
        this.score++;
        return this;//need to return the scope of this in order to do method chaining
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email;
        })
    }
}
var userOne = new User('goswamisubhojit1947@gmail.com', 'subho', 0);
var userTwo = new User('substallin@gmail.com', 'stallin', 0);
var admin = new Admin('goswamibiswajit891@yahoo.in', 'biswajit', 0);
console.log(this.userOne);
console.log(this.userTwo);
this.userOne.logIn();
this.userOne.logOut();
this.userTwo.logIn();
this.userTwo.logOut();
this.userOne.logIn().updateScore().logOut();//this is method chaining
this.userOne.logIn().updateScore().logOut();
this.userOne.logIn().updateScore().logOut();

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users);
console.log(users);