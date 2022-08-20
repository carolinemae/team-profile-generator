const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('correct name', () => {
            let position = 'Employee',
                name = 'test',
                id = '123',
                email = 'test@example.com';

            const emp = new Employee(position, name, id, email);

            expect(emp.getName()).toBe(name);
        });

        it('correct id', () => {
            let position = 'Employee',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const emp = new Employee(position, name, id, email);
    
            expect(emp.getID()).toBe(id);
        });

        it('correct email', () => {
            let position = 'Employee',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const emp = new Employee(position, name, id, email);
    
            expect(emp.getEmail()).toBe(email);
        });

        it('correct role', () => {
            let position = 'Employee',
                name = 'test',
                id = '123',
                email = 'test@example.com';
    
            const emp = new Employee(position, name, id, email);
    
            expect(emp.getRole()).toBe('Employee');
        });

    })
})