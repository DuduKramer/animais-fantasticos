export default class Tooltip {
  constructor(tooltips){
     this.tooltips = document.querySelectorAll(tooltips);

     //bind do objeto da classe aos callbacks
     this.onMouseLeave = this.onMouseLeave.bind(this);
     this.onMouseMove = this.onMouseMove.bind(this);
     this.onMouseOver = this.onMouseOver.bind(this); 
  }
  
  // move a tooltip com base em seus estilos de acordo com a posiçao do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;   // Corrigido
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 190}px` 
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px` 
    }
  }

//remove a tooltip e os efeitos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
  
  //cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

/* //  onMouseOver() {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);  // Corrigido
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
 */

  //cria a tooltip e adiciona os 
  //eventos de mousemove e mouseleave ao target
  onMouseOver({currentTarget}) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);  // Corrigido
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

//adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }
  
  init(){
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}


