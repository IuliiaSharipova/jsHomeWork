export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitriy Sidorov', age: 18}
];
const transformator = (man: ManType) => (
    {
        stack: ['CSS', 'JS', 'HTML', 'React'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
);

const dev = people.map(transformator);
const dev2 = people.map(man => ({
    stack: ['CSS', 'JS', 'HTML', 'React'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));

const messages = people.map(man => `Hellow, ${man.name.split(' ')[0]}, welcome!`);