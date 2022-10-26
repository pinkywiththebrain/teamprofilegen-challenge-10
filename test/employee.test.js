const Employee = require("../lib/employee")

//tests if the constructor creates the correct properties, corresponding values, and method return value
describe("Employee", () => {
        it("Should return an object containing the properties name, id, and email.", () => {
            const obj = new Employee("Sophie", 960, "sophiemc99@gmail.com");

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });

        it("Should return employee name as a string.", () => {
            const obj = new Employee("Sophie", 960, "sophiemc99@gmail.com");

            expect(obj.getName()).toEqual(expect.stringContaining(obj.name));
        });

        it("Should return employee ID as number.", () => {
            const obj = new Employee("Sophie", 960, "sophiemc99@gmail.com");

            expect(obj.getId()).toEqual(expect.any(Number));
        });

        it("Should return employee email as a string.", () => {
            const obj = new Employee("Sophie", 960, "sophiemc99@gmail.com");

            expect(obj.getEmail()).toEqual(expect.stringContaining(obj.email));
        });

        it("Should return role of 'Employee'.", () => {
            const obj = new Employee("Sophie", 960, "sophiemc99@gmail.com");

            expect(obj.getRole()).toEqual("Employee");
        });
    });