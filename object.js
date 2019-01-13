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
console.log(this.userOne['name']);//this is another way of accessing the object properties
console.log(this.userOne['email']);//this is another way of accessing th object properties
//we cn also add object properties on the fly although I dislike it , its better to define all the properties from the begining only in the object even though if you have to keep it as null
this.userOne['age'] = 25;
console.log(this.userOne);//a new property would get added namely age with a value of 25
this.userOne.surname = 'goswami';
console.log(this.userOne);// a new property would get added namely surname with a value of goswami