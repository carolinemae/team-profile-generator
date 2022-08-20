const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        const position = 'Engineer';
        super(position, name, id, email);
        this.github = github;
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
        return 'Engineer';
    }
}

module.exports = Engineer;