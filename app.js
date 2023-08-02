//const os = require('os');
const fs = require('fs');

const genders = ['M', 'F']
const firstNameFamale = ['Denerys', 'Cercei', 'Sanda', 'Arya', 'Margery', 'Cat', 'Lisa', 'Yennefer', 'Triss', 'Filippa', 'Ciri' ]
const firstNameMale = ['Joffrey', 'Rob', 'John', 'Sam', 'Ned', 'Robert', 'Jon', 'Tyrion', 'Tawin', 'Gerald', 'Jaskier', 'Dikstra' ]
const lastName = [ 'Lannister', 'Stark', 'Greyjoy', 'Martell', 'Fray', 'Snow', 'Sand', 'Barathon', 'Targerian', 'Mormond', 'Tayrell', 'Tally' ]


const randChoice = (arg) => {
    const rand = Math.floor(Math.random() * arg.length)
    return arg[rand]
}
let people =[]

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders)
    const minAge = 18;
    const maxAge = 78

    people[i] = {
        gender: gender,
        name: gender === 'M' ? randChoice(firstNameMale) : randChoice(firstNameFamale),
        lastName: randChoice(lastName),
        age: Math.floor(Math.random() * (maxAge-minAge + 1) + minAge)
    }
}

 fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) console.log("Something went wrong");
    console.log('File has been successfully generated! Check people.json')
})
