const Manager = require('../lib/manager');

describe('Manager', () => {
    it('correct name', () => {
        let position = 'Manager',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const man = new Manager(name, id, email, position);

        expect(man.getName()).toBe(name);
    })
})

describe('Manager', () => {
    it('correct id', () => {
        let position = 'Manager',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const man = new Manager(name, id, email, position);

        expect(man.getID()).toBe(id);
    })
})

describe('Manager', () => {
    it('correct email', () => {
        let position = 'Manager',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const man = new Manager(name, id, email, position);

        expect(man.getEmail()).toBe(email);
    })
})

describe('Manager', () => {
    it('correct position', () => {
        let position = 'Manager',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const man = new Manager(name, id, email, position);

        expect(man.getRole()).toBe(position);
    })
})