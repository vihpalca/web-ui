const pessoa = { nome: 'Victor', idade: 20, sexo: 'masculino' };

const { nome: nomeObjeto } = pessoa;

console.log(nomeObjeto);


const pessoa2 = {
  nome: 'João',
  endereco: { rua: 'Avenida Brasil', numero: 800 }
};

const { endereco: { rua: r } } = pessoa2;

console.log(r);