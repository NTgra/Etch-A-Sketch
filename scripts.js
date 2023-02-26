
const container = document.querySelector('#container');

function displayDivs(){
    const grid = 16;
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
displayDivs();


