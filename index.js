let superheroes=[
    {
        name: 'Superman',
        age: 42,
        planet: 'krypton',
        group: 'justice league'
    },
    {
        name: 'Thor',
        age: 1500,
        planet: 'asgard',
        group: 'Avengers'
    },
    {
        name: 'Star lord',
        age: 36,
        planet: 'earth',
        group: 'guardians of the galaxy'
    },
    {
        name: 'Iron man',
        age: 45,
        planet: 'earth',
        group: 'avengers'
    },
    {
        name: 'Captain America',
        age: 105,
        planet: 'earth',
        group: 'avengers'
    },
    {
        name: 'spider man',
        age: 17,
        planet: 'earth',
        group: 'avengers'
    }
]


// loop  




function createRows(supes)
{

    document.getElementById("data").innerHTML="";

    supes.forEach(function(superhero,i) {

    // console.log(superhero);

    let tr=document.createElement('tr');
    
    let td1=document.createElement('td');
    td1.append(i+1);
    
    let td2=document.createElement('td');
    td2.append(superhero.name);
    
    let td3=document.createElement('td');
    td3.append(superhero.age);

    let td4=document.createElement('td');
    td4.append(superhero.planet);

    let td5=document.createElement('td');
    td5.append(superhero.group);



    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    
    document.getElementById("data").append(tr);


})

}

createRows(superheroes);

function searchName(sName) {
    
    let filteredArray=superheroes.filter(function(superhero,index){
        return superhero.name.toUpperCase().includes(sName.toUpperCase());
    })

    createRows(filteredArray);

}
function insertSuperhero(newEntries){ 
var newEntries = {
    name : document.getElementById("newName").value,
    age: document.getElementById("newAge").value,
    planet: document.getElementById("newPlanet").value,
    group : document.getElementById("newGroup").value
}

    superheroes.push(newEntries);
    console.log(superheroes)
    document.getElementById("btn').addEventListener('click",insertSuperhero);

    createRows(superheroes);

}