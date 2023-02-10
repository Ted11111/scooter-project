const User = require('../src/User')

// User tests here

// test username

// test password

// test age

// test login

// test logout

describe("User Tests", () => {
    // Tests for User.js
    test("User values are valid", () => {
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
         // Checks if Age is valid //
        expect(newUser.age).toBeDefined()
        expect(typeof newUser.age === "number" && !isNaN(newUser.age)).toBe(true);
        expect(newUser.age).toBe(18)
        // Checks if LoggedIn is valid //
        expect(newUser.loggedIn).toBeDefined()
        expect(typeof newUser.loggedIn).toBe("boolean");
        expect(newUser.loggedIn).toBe(false)
    });
});
