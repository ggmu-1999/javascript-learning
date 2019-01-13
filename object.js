var userOne = {
    name: "Subhojit",
    email: "goswamisubhojit1947@gmail.com",
    login: () => {
        console.log(this.userOne.name + " has logged in ");
    },
    logout: () => {
        console.log(this.userOne.name + " has logged out ");
    }
};

console.log("My name is " + this.userOne.name + " and my email id is " + this.userOne.email);
console.log(this.userOne.login());
console.log(this.userOne.logout());
