/*
    ForEach(Item, index, array)
*/

const users = [
    { name: 'Caio', age: 43, number: '(14) 9293-3244' },
    { name: 'Paulo', age: 52, number: '(14) 4173-7545' },
    { name: 'Rayssa', age: 76, number: '(14) 8567-1864' },
    { name: 'Levi', age: 21, number: '(14) 6987-596487' },

]

users.forEach( function (item, index, array)  {
    console.log(item)
});