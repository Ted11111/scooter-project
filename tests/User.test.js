const User = require('../src/User')

// User tests here

// test username
describe('username tests', () => {
    const testUser1 = new User("")
    test('Tests if username is valid', () => {
        expect(testUser1.name).toThrowError("Invalid Username")
    })
    const testUser2 = new User("Teddy", "Password", 18, true)
    test('Tests if username is outputted', () => {
        expect(testUser2.name).toBe("Teddy")
        expect(typeof testUser2.name).toBe("string")
    })
})
// test password
describe('password tests', () => {
    const testUser1 = new User("")
    test('Tests if password is valid', () => {
        expect(testUser1.password).toThrowError("Invalid Password")
    })
    const testUser2 = new User("Teddy", "Password", 18, true)
    test('Tests if password is outputted', () => {
        expect(testUser2.password).toBe("Password")
        expect(typeof testUser2.password).toBe("string")
    })
})
// test age
describe('age tests', () => {
    const testUser1 = new User("")
    test('Tests if age is valid', () => {
        expect(testUser1.age).toThrowError("Invalid Age")
    })
    //const testUser2 = new User("Teddy", "Password", 18, true)
    // const testUser3 = new User("Teddy", "Password", 17, true)
    //test('Tests if password is outputted', () => {
       // expect(testUser2.age).toBe(18)
       // expect(testUser3.age).toThrowError("User is underaged")
    //})
})
// test login
describe('Login method', () => {
    const storedPassword2 = "NotPass"
    const testUser1 = new User("Teddy", "Password", 18, true)
    const testUser2 = new User()
    test('Tests if password matches stored password', () => {
        expect(testUser1.password).toBe("Password")
    })
    test('Password throws error if it does not match stored password', () => {
        if(testUser1.password != storedPassword2){
            expect().toThrowError("Password Incorrect")
        }
    })
    test('Tests if password is valid'. () => {
    })
})
// test logout
