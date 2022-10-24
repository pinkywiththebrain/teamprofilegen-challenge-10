const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    it("Should return an object containing the properties name, id, and email.", () => {
        const obj = new Engineer("Sophie", 960, "sophiemc99@gmail.com", "pinkywiththebrain");

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
    });

    it("Should return role of 'Engineer'.", () => {
        const obj = new Engineer("Sophie", 960, "sophiemc99@gmail.com", "pinkywiththebrain");

        expect(obj.getRole()).toEqual("Engineer");
    });

    it("Should return engineers github username as a string.", () => {
        const obj = new Engineer("Sophie", 960, "sophiemc99@gmail.com", "pinkywiththebrain");

        expect(obj.getGithub()).toEqual(expect.stringContaining(obj.github));
    });
});