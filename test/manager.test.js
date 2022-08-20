const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('correct name', () => {
            let position = 'Manager',
                name = 'test',
                id = '123',
                email = 'test@example.com';

            const man = new Manager(name, id, email, position);

            expect(man.getName()).toBe(name);
        });

        it('correct id', () => {
            let position = 'Manager',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const man = new Manager(name, id, email, position);
    
            expect(man.getID()).toBe(id);
        });

        it('correct email', () => {
            let position = 'Manager',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const man = new Manager(name, id, email, position);
    
            expect(man.getEmail()).toBe(email);
        });

        it('correct position', () => {
            let position = 'Manager',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const man = new Manager(name, id, email, position);
    
            expect(man.getRole()).toBe(position);
        })

    })
})