/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

//ARRAY DI OGGETTI
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founde & Ceo',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Carol',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Grapihc Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(team);

// Eseguo ciclo sul array per prendere gli elementi
for (let i = 0; i < team.length; i++) {

    const info = team[i];

    // stampo gli oggetti del array
    console.log('Name:', info.name);
    console.log('Role:', info.role);
    console.log('Image:', info.image);
}