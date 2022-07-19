export const usersArray = [
    {id: 101555, name: 'Dima'},
    {id: 544555, name: 'Natasha'},
    {id: 766555, name: 'Valera'},
    {id: 106655, name: 'Katya'},
];
export const userObj = {
    '0': 'Dima',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
};

let user = {id: 458369, name: 'Igor'};

export type UsersType = {
    [key: string]: { id: number, name: string }
}
//Associative Array
export const users: UsersType = {
    '101555': {id: 101555, name: 'Dima'},
    '544555': {id: 544555, name: 'Natasha'},
    '766555': {id: 766555, name: 'Valera'},
    '106655': {id: 106655, name: 'Katya'},
};
users[user.id] = user; //add user
/*
usersArray.push()-for classic Array*/

delete users[user.id];//delete
let newArray = usersArray.filter(u => u.id !== user.id);//delete in classic Array

