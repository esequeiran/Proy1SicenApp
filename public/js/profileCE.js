'use strict';

let tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button');
let tabPanels = document.querySelectorAll('.tabContainer .tabPanel');

let showPanel = (ppanelIndex, pcolorCode) => {

    tabButtons.forEach(function(node){
        node.style.backgroundColor = ''; 
        node.style.color = ''; 
    });

    tabButtons[ppanelIndex].style.backgroundColor =  '#F9AA33';
    tabButtons[ppanelIndex].style.color = 'white';

    tabPanels.forEach(function(node){
        node.style.display = 'none';
    });

    tabPanels[ppanelIndex].style.display = 'block';
    tabPanels[ppanelIndex].style.backgroundColor =  pcolorCode;

};

showPanel(0, '#fff');

// **************************************************************************


// let fotoCE = document.querySelector('.photoCE')

// let nombreCE = document.querySelector('.infoWrapper .info h2');

// let direccionCE = document.querySelector('.infoWrapper .info h3');

// window.onload = function () {

// };