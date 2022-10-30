const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create a Manager Instance that is an object", () => {
        const createManager = new Manager();

        expect(typeof createManager).toBe("object");
    });

    it("should create a Manager Instance with name", () => {
        const createManager = new Manager("Frances");

        expect(createManager.name).toBe("Frances");
    });

    it("should create a Manager Instance with an ID", () => {
        const createManager = new Manager("Frances", 1);

        expect(createManager.id).toBe(1);
    });

    it("should create a Manager Instance with an email", () => {
        const createManager = new Manager("Frances", 1, "sampleemail@gmail.com");

        expect(createManager.email).toBe("sampleemail@gmail.com");
    });

    it("should create a Manager Instance with office number", () => {
        const createManager = new Manager("Frances", 1, "sampleemail@gmail.com", 123);

        expect(createManager.officeNum).toBe(123);
    })

    it("should return Manager role'", () => {
        const createManager = new Manager("Frances", 1, "sampleemail@gmail.com");

        expect(createManager.getRole()).toBe("Manager");
    });
});