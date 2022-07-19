import {ManType} from './Destructuring';

let man: ManType;
beforeEach(() => {
    man = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'},{title: '3', name:'react'}],
        address: {
            street: {
                title: 'Nezavisimosti'
            }
        }
    };
});
test('1', () => {

    // const age=man.age
    // const lessons=man.lessons

    const {age, lessons, address: {street: {title}}} = man;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
});

//Destructuring of Array:

test('2', () => {

    /*const l1 = man.lessons[0];
    const l2 = man.lessons[1];
*/
    // const [ls1, ls2] = man.lessons; //Destructuring of Array
    const [ls1, ...restLessons] = man.lessons; //Destructuring of Array

    expect(ls1.title).toBe('1');
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe('2');
    expect(restLessons[1]).toStrictEqual({title: '3', name:'react'});
});