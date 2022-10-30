const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should create an Intern Instance that is an object", () => {
        const createIntern = new Intern();

        expect(typeof createIntern).toBe("object");
    });

    it("should create an Intern Instance with a name", () => {
        const createIntern = new Intern("Frances");

        expect(createIntern.name).toBe("Frances");
    });

    it("should create an Intern Instance with an id", () => {
        const createIntern = new Intern("Frances", 1);

        expect(createIntern.id).toBe(1);
    });

    it("should create an Intern Instance with an email", () => {
        const createIntern = new Intern("Frances", 1, "sampleemail@gmail.com");

        expect(createIntern.email).toBe("sampleemail@gmail.com");
    });

    it("should create an Intern Instance with a school name", () => {
        const createIntern = new Intern("Frances", 1, "sampleemail@gmail.com", "Rutgers");

        expect(createIntern.school).toBe("Rutgers");
    });

    it("should return Intern's school", () => {
        const createIntern = new Intern("Frances", 1, "sampleemail@gmail.com", "Rutgers");

        expect(createIntern.getSchool()).toBe("Rutgers");
    });

    it("should return Intern Role", () => {
        const createIntern = new Intern();

        expect(createIntern.getRole()).toBe("Intern");
    });
});