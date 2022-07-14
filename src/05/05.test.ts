import {ManType} from './05';

let people: Array<ManType> = [];
beforeEach(() => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitriy Sidorov', age: 18}
    ];
});

test('should get array of greeting messages', ()=>{
    const messages = people.map(man => `Hellow, ${man.name.split(' ')[0]}, welcome!`);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hellow, Andrey, welcome!')
    expect(messages[1]).toBe('Hellow, Alexander, welcome!')
    expect(messages[2]).toBe('Hellow, Dmitriy, welcome!')
})