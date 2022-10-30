const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create an Employee Instance that is an object", () => {
        const createEmployee = new Employee();

        expect(typeof createEmployee).toBe("object");
    });

    it("should create an Employee Instance with name", () => {
        const createEmployee = new Employee("Frances");

        expect(createEmployee.name).toBe("Frances");
    });

    it("should create an Employee Instance with an ID", () => {
        const createEmployee = new Employee("Frances", 1);

        expect(createEmployee.id).toBe(1);
    });

    it("should create an Employee Instance with an email", () => {
        const createEmployee = new Employee("Frances", 1, "sampleemail@gmail.com");

        expect(createEmployee.email).toBe("sampleemail@gmail.com");
    });

    it("should create an Employee Instance that will return the role 'Employee'", () => {
        const createEmployee = new Employee("Frances", 1, "sampleemail@gmail.com");

        expect(createEmployee.getRole()).toBe("Employee");
    });
});