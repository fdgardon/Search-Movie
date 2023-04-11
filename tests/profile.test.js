const Profile = require("../lib/profile");

test("test setting name in the class", () => {
    const person = new Profile("Bob", "bob@example.com", "password12345")
     expect(person.name).toBe("Bob")

})
test("test setting name in the class", () => {
    const person = new Profile("Bob", "bob@example.com", "password12345")
     expect(person.email).toBe("bob@example.com")

})
test("test setting name in the class", () => {
    const person = new Profile("Bob", "bob@example.com", "password12345")
     expect(person.password).toBe("password12345")

})
test("test setting name in the class", () => {
    const person = new Profile("Bob", "bob@example.com", "password12345")
     expect(person.getName()).toBe("Bob")

})
