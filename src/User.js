const scooterApp = require('./ScooterApp')

class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }

  login(password) {
    const self = this;
    const pass = password;
    let found = false;
    for (let i = 0; i < scooterApp.registeredUsers.length; i++) {
      if (self.username === scooterApp.registeredUsers[i]["username"]) {
        // User is found and is already registered
        console.log("User Found!")
        found = true;
        if (pass === scooterApp.registeredUsers[i]["password"]){
          console.log("Login Successful");
          self.loggedIn = true
          scooterApp.registeredUsers[i]["loggedIn"] = true
          break;
        } else {
          throw new Error("Incorrect Password");
        }
      }
    }
    if (!found) {
      // User not registered
      if(self.age < 18){
        throw new Error("User is underaged")
      } else {
        throw new Error("User is not registered") 
      }
    }
  }

  logout(){
    //Code Goes here
  }
}
const newUser = new User("Teddy", "Password", 18)

newUser.login("Password")
module.exports = User
