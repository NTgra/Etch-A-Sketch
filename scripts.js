
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
const wrapper = document.querySelector('#wrapper');
function displayDivs(grid){
    const container = document.querySelector('#container');
    
    let divWidth=((640/grid));
    console.log(divWidth)
    
    let j=0;
    while(j<grid){
        for (i=0; i<grid; i++){
            const canvas = document.createElement('div');
            canvas.classList.add('canvas-blank');
            canvas.style.width=divWidth+"px";
            canvas.style.height=divWidth+"px";
            container.appendChild(canvas);              
        }
        j++;
    } 
    
    let divFiller = document.querySelectorAll('.canvas-blank');

  for (let k=0; k<divFiller.length; k++){
      divFiller[k].addEventListener('mouseover', function(e){
          this.setAttribute("class", "canvas-blank-fill");
      })
  }      
}

btn.addEventListener('click', () =>  {
    let gridSize = prompt('');
    if (gridSize>100){
        alert('The grid size can\'t be bigger than 100x100\nSetting the grid to 100x100')
        gridSize=100;
    } 
    if (gridSize<=0){
        alert('The grid size can\'t be negative or zero!\nSetting the grid to 2x2')
        gridSize=2;
    }
    clearBox('container');
    displayDivs(gridSize); 
  });

  