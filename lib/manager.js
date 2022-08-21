// Imports employee class in order to extend
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeno) {
        const position = 'Manager';
        super(position, name, id, email);
        this.officeno = officeno;
    };

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;