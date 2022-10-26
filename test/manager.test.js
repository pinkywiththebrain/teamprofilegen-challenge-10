const Manager = require("../lib/manager")

//tests if the constructor creates the correct properties and corresponding values from the parent object, and correct method return value
describe("Manager", () => {
    it("Should return an object containing the properties name, id, and email.", () => {
        const obj = new Manager("Sophie", 960, "sophiemc99@gmail.com", 123);

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
    });

    it("Should return role of 'Manager'.", () => {
        const obj = new Manager("Sophie", 960, "sophiemc99@gmail.com", 123);

        expect(obj.getRole()).toEqual("Manager");
    });

    it("Should return manager's office number as a number.", () => {
        const obj = new Manager("Sophie", 960, "sophiemc99@gmail.com", 123);

        expect(obj.getOfficeNum()).toEqual(expect.any(Number));
    });
});