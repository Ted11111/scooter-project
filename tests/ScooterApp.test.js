const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter

describe("ScooterApp Tests", () => {
    test("Stations Valid", () => {
        const stations = [Station1, Station2]
        const users = [new User("Jerry", "Password", 19, true), new User("Tom", "Password", 21, true)]
        const instance = new ScooterApp(stations, users)

        expect(instance.stations).toBeDefined()
        expect(instance.stations).toBe(stations)
    })
    test("Users Valid", () => {
        const stations = [Station1, Station2]
        const users = [new User("Jerry", "Password", 19, true), new User("Tom", "Password", 21, true)]
        const instance = new ScooterApp(stations, users)

        expect(instance.registeredUsers).toBeDefined(users)
        expect(instance.registeredUsers).toBe(users)
    })
})