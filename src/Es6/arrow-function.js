let dobro = function (num) {
  return 2 * num;
}

dobro = (num) => { //Função arrow é sempre anonima, se vc quer chamar ela depois tem que armazenar em uma variavel
  return 2 * num
}

dobro = num => 2 * num //Se você tiver só um parâmetor e uma função de uma linha o return fica implicito

console.log(dobro(2)) //this associado ao contexto no qual a funçõ foi escrita