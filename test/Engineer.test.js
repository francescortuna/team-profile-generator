const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create an Engineer Instance that is an object", () => {
        const createEngineer = new Engineer();

        expect(typeof createEngineer).toBe("object");
    });

    it("should create an Engineer Instance with a name", () => {
        const createEngineer = new Engineer("Frances");

        expect(createEngineer.name).toBe("Frances");
    });

    it("should create an Engineer Instance with an id", () => {
        const createEngineer = new Engineer("Frances", 1);

        expect(createEngineer.id).toBe(1);
    });

    it("should create an Engineer Instance with an email", () => {
        const createEngineer = new Engineer("Frances", 1, "sampleemail@gmail.com");

        expect(createEngineer.email).toBe("sampleemail@gmail.com");
    });

    it("should create an Engineer Instance with an github", () => {
        const createEngineer = new Engineer("Frances", 1, "sampleemail@gmail.com", "francescortuna");

        expect(createEngineer.github).toBe("francescortuna");
    });

    it("should create an Engineer Instance with an email", () => {
        const createEngineer = new Engineer("Frances", 1, "sampleemail@gmail.com", "francescortuna");

        expect(createEngineer.getGithub()).toBe("github.com/francescortuna");
    });

    it("should create an Engineer Instance with an email", () => {
        const createEngineer = new Engineer();

        expect(createEngineer.getRole()).toBe("Engineer");
    });
});