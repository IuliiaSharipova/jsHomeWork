export type UsersType = {
    [key: string]: { id: number, name: string }
}
//Associative Array
let usersInTest: UsersType = {};
beforeEach(() => {
    usersInTest = {
        '101555': {id: 101555, name: 'Dima'},
        '544555': {id: 544555, name: 'Natasha'},
        '766555': {id: 766555, name: 'Valera'},
        '106655': {id: 106655, name: 'Katya'},
    };
});

test('should update corresponding user from object', () => {
    usersInTest['106655'].name = 'Ekaterina';
    expect(usersInTest['106655'].name).toBe('Ekaterina');
    expect(usersInTest['106655']).toEqual({id: 106655, name: 'Ekaterina'});
});
test('should delete corresponding user from object', () => {
     delete usersInTest['766555'];
    expect(usersInTest['766555']).toBeUndefined();
});