const Intern = require("../lib/intern")

describe("Intern", () => {
    it("Should return an object containing the properties name, id, and email.", () => {
        const obj = new Intern("Sophie", 960, "sophiemc99@gmail.com", "University of Richmond");

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
    });

    it("Should return role of 'Intern'.", () => {
        const obj = new Intern("Sophie", 960, "sophiemc99@gmail.com", "University of Richmond");

        expect(obj.getRole()).toEqual("Intern");
    });

    it("Should return interns school name as a string.", () => {
        const obj = new Intern("Sophie", 960, "sophiemc99@gmail.com", "University of Richmond");

        expect(obj.getSchool()).toEqual(expect.stringContaining(obj.school));
    });
});