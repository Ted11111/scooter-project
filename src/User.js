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
          scooterApp.loginUser(self.username, self.password)
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
    const self = this
    if(self.loggedIn == true){
      self.loggedIn = false
      scooterApp.logoutUser(self.username)
    }else{
      throw new console.error("User not logged in.");
    }
  }
}

module.exports = User
