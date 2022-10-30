const Employee = require("./Employee");

class Manager extends Employee {
    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;