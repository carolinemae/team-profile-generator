const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('correct name', () => {
        let position = 'Intern',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const int = new Intern(name, id, email, position);

        expect(int.getName()).toBe(name);
    })
})

describe('Intern', () => {
    it('correct id', () => {
        let position = 'Intern',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const int = new Intern(name, id, email, position);

        expect(int.getID()).toBe(id);
    })
})

describe('Intern', () => {
    it('correct email', () => {
        let position = 'Intern',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const int = new Intern(name, id, email, position);

        expect(int.getEmail()).toBe(email);
    })
})

describe('Intern', () => {
    it('correct position', () => {
        let position = 'Intern',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const int = new Intern(name, id, email, position);

        expect(int.getRole()).toBe(position);
    })
})