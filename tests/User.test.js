const User = require('../src/User')

// User tests here

// test username

// test password

// test age

// test login

// test logout

describe("User Tests", () => {
    // Tests for User.js
    test("Username & Password are valid", () => {
        // Creates New Instance //
        const newUser = new User("Teddy","Password",18,false)
        // Checks if Username is valid //
        expect(newUser.username).toBeDefined()
        expect(typeof newUser.username).toBe("string")
        expect(newUser.username).toBe("Teddy")
        // Checks if Password is valid //
        expect(newUser.password).toBeDefined()
        expect(typeof newUser.password).toBe("string")
        expect(newUser.password).toBe("Password")
    });
    test("Age is valid", () => {
        // Creates New Instance //
        const newUser = new User("Teddy","Password",17,false)
        //  Checks if Age is valid //
        expect(newUser.age).toBeDefined()
        expect(typeof newUser.age === "number" && !isNaN(newUser.age)).toBe(true);
        
    })
});
