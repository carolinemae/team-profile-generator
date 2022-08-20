const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('correct name', () => {
            let position = 'Intern',
                name = 'test',
                id = '123',
                email = 'test@example.com';

            const int = new Intern(name, id, email, position);

            expect(int.getName()).toBe(name);
        });

        it('correct id', () => {
            let position = 'Intern',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const int = new Intern(name, id, email, position);
    
            expect(int.getID()).toBe(id);
        });

        it('correct email', () => {
            let position = 'Intern',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const int = new Intern(name, id, email, position);
    
            expect(int.getEmail()).toBe(email);
        });

        it('correct position', () => {
            let position = 'Intern',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const int = new Intern(name, id, email, position);
    
            expect(int.getRole()).toBe(position);
        });

    })
})