const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('correct name', () => {
        let position = 'Engineer',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const eng = new Engineer(name, id, email, position);

        expect(eng.getName()).toBe(name);
    })
})

describe('Engineer', () => {
    it('correct id', () => {
        let position = 'Engineer',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const eng = new Engineer(name, id, email, position);

        expect(eng.getID()).toBe(id);
    })
})

describe('Engineer', () => {
    it('correct email', () => {
        let position = 'Engineer',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const eng = new Engineer(name, id, email, position);

        expect(eng.getEmail()).toBe(email);
    })
})

describe('Engineer', () => {
    it('correct position', () => {
        let position = 'Engineer',
            name = 'test',
            id = '123',
            email = 'test@example.com';

        const eng = new Engineer(name, id, email, position);

        expect(eng.getRole()).toBe(position);
    })
})