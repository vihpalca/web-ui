function mediaAluno(p1, p2, p3) {
  return ((p1 + p2 + p3) / 3 ).toFixed(2);
}

const notasAluno = [ 7, 8, 3]

console.log(mediaAluno(...notasAluno))