
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


const wrapper = document.querySelector('#wrapper');
function displayDivs(grid){
    const container = document.querySelector('#container');
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

    let divWidth=(640/grid);
    console.log(divWidth)
    console.log(randomColor)
    
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
        const statusBar = document.createElement('div');
        statusBar.classList.add('status-bar');
        statusBar.textContent='Grid size: '+grid+'x'+grid;
        container.appendChild(statusBar);  
    let divFiller = document.querySelectorAll('.canvas-blank');

  for (let k=0; k<divFiller.length; k++){
      divFiller[k].addEventListener('mouseover', function(e){
        

        document.documentElement.style.setProperty('--random-fill-color', randomColor);
         this.setAttribute("class", "canvas-blank-fill");
        
      })
  }      
}

btn.addEventListener('click', () =>  {
     gridSize = prompt('');
    if (gridSize>100){
        alert('The grid size can\'t be bigger than 100x100\nSetting the grid to 100x100')
        gridSize=100;
    } 
    if (gridSize<=0){
        alert('The grid size can\'t be negative or zero!\nSetting the grid to 16x16')
        gridSize=16;
    }
    clearBox('container');
    displayDivs(gridSize);

  });
  