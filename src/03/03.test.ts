import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Iuliia',
        age: 32,
        isActive: false,
        address: {
            street: 'Kuznecova',
            city: {
                title: 'Yaroslavl',
                country: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
        ]
    };
});
test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'React');
    expect(student.technologies[3].title).toBe('React');
    expect(student.technologies[3].id).toBeDefined();

});
test('student should be active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
});
test('does student live in the city', () => {
    let result1 = doesStudentLiveIn(student, 'Yaroslavl');
    let result2 = doesStudentLiveIn(student, 'Minsk');
    expect(result1).toBe(true);
    expect(result2).toBe(false);
});
