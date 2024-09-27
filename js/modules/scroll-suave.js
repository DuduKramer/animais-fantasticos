export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined){
      this.options = {behavior: 'smooth', block: 'start'};
    } else{
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);

    // Garantindo que o this dentro de scrollToSection se refira à instância da classe
    //this.scrollToSection = this.scrollToSection.bind(this);
  }
 
  scrollToSection(event) {
    event.preventDefault(); // Captura o evento corretamente
    const href = event.currentTarget.getAttribute('href'); // Obtém o href do link
    const section = document.querySelector(href); // Seleciona a seção com base no href
    section.scrollIntoView(this.options); // Aplica a rolagem suave para a seção

    // Forma alternativa comentada:
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      // Usa uma arrow function para garantir o correto repasse do evento e o contexto de 'this'
      link.addEventListener('click',  this.scrollToSection);
    });
  }

  init() {
    if(this.linksInternos.length){
      this.addLinkEvent();
    }
    return this;
}
}
