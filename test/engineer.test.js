const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('correct name', () => {
            let position = 'Engineer',
                name = 'test',
                id = '123',
                email = 'test@example.com';

            const eng = new Engineer(name, id, email, position);

            expect(eng.getName()).toBe(name);
        });

        it('correct id', () => {
            let position = 'Engineer',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const eng = new Engineer(name, id, email, position);
    
            expect(eng.getID()).toBe(id);
        });

        it('correct email', () => {
            let position = 'Engineer',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const eng = new Engineer(name, id, email, position);
    
            expect(eng.getEmail()).toBe(email);
        });

        it('correct position', () => {
            let position = 'Engineer',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const eng = new Engineer(name, id, email, position);
    
            expect(eng.getRole()).toBe(position);
        });

    })
})