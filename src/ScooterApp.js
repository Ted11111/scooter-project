const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  static registeredUsers = []
  static stations = [{name: "Station1", location: "London", scooters:[]}]
  
  registerUser(username, password, age){
    if(age < 18){
      throw new Error("User is underaged");
    } else{
      ScooterApp.registeredUsers.push(new User(username, password, age))
      console.log(ScooterApp.registeredUsers[0])
    }
  }

  loginUser(username, password){
    for (let i = 0; i < ScooterApp.registeredUsers.length; i++) {
      if (username === ScooterApp.registeredUsers[i]["username"]) {
        // User is found and is already registered
        console.log("User Found!")
        found = true;
        if (password === scooterApp.registeredUsers[i]["password"]){
          console.log("Login Successful");
          ScooterApp.registeredUsers[i]["loggedIn"] = true
          break;
        } else {
          throw new Error("Incorrect Password");
        }
      }
    }
  }

  logoutUser(username){
    for (let i = 0; i < ScooterApp.registeredUsers.length; i++) {
      if (username === ScooterApp.registeredUsers[i]["username"]) {
        ScooterApp.registeredUsers[i]["loggedIn"] = false
      }
    }
  }
}


const newScooterApp = new ScooterApp()
const teddyUser = new User("Teddy", "Password", 18)
newScooterApp.registerUser(teddyUser)
module.exports = newScooterApp
