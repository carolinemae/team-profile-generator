const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        const position = 'Intern';
        super(position, name, id, email);
        this.school = school;
    };

    // getName() {
    //     return this.name;
    // }

    // getID() {
    //     return this.id;
    // }

    // getEmail() {
    //     return this.email;
    // }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;