const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should return an object containing the properties name, id, and email.", () => {
            const obj = new Employee();

            expect(obj.name).toEqual(true);
            expect(obj.id).toEqual(true);
            expect(obj.email).toEqual(true);
        });
    });
});