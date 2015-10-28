/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* Selecteer de juiste fieldset door middel van querySelector (gebruik van CSS selectors) */
var projectFormulier = document.querySelector('#project');
var stageFormulier = document.querySelector('#stage');

/* Selecteer de radio button */
var projectRadioButton = document.querySelector('input[value=project]');
var stageRadioButton = document.querySelector('input[value=stage]');

/* Standaard display: none op beide formulieren toepassen, waardoor ze in eerste instantie niet worden getoond */
projectFormulier.classList.add('weg');
stageFormulier.classList.add('weg');

/* Koppel de functie die de toggle uitvoert, dus op het moment dat je op die ene klikt, wordt display: none van diegene afgehaald en bij de andere toegevoegd, waardoor de gene waar je op klikt verschijnt en de andere verdwijnt */
function projectField() {
    projectFormulier.classList.remove('weg');
    stageFormulier.classList.add('weg');
}

function stageField() {
    stageFormulier.classList.remove('weg');
    projectFormulier.classList.add('weg');
}

projectRadioButton.addEventListener('click', projectField);
stageRadioButton.addEventListener('click', stageField);
