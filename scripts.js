
const container = document.querySelector('#container');

function displayDivs(grid){

    let j=0;
    while(j<grid){
        for (i=0; i<grid; i++){
            const canvas = document.createElement('div');
            canvas.classList.add('canvas-blank');
            canvas.textContent = i;
            container.appendChild(canvas);        
        }
        j++;
    }       
}
displayDivs(16);

let divFiller = document.querySelectorAll('.canvas-blank');

for (let k=0; k<divFiller.length; k++){
    divFiller[k].addEventListener('mouseover', function(e){
        this.setAttribute("class", "canvas-blank-fill");
    })
}
