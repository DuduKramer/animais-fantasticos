export default function debounce(callback, delay) {
  let timer; // Variável para armazenar o identificador do temporizador (timer)
  return (...args) => {
    // Retorna uma função que será executada no lugar da original
    if (timer) clearTimeout(timer); // Se houver um timer ativo, ele é cancelado
    timer = setTimeout(() => {
      // Cria um novo timer para executar o `callback` após o delay
      callback(...args); // Executa o callback com os argumentos fornecidos
      timer = null; // Limpa o timer após a execução
    }, delay);
  };
}
