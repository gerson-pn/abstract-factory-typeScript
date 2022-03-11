import FestaInfantil from "../fabricas/festaInfantil";

let fabrica = new FestaInfantil()

let alimento = fabrica.criarAlimentacao()
let musica = fabrica.criarMusica()

console.log(`Cardápio: ${alimento.obterDescricao()}`);
console.log(`Informações da trilha sonora: 
nome: ${musica.obterNome()}
autor: ${musica.obterAutor()}
duração: ${musica.obterTempoDuracao()}`);
