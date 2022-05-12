function paramTriplo(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(param1) || isNaN(param2) || isNaN(param3)) reject(new Error("Não é um numero"));

    const resultado = (param1 + param2) * param3;
    resultado > 50 ? resolve(resultado) : reject(new Error('Flopou'))
  });

  return promise;
}

paramTriplo(5, 5, 10)
.then((e) => console.log(`deu bom ${e}`))
.catch((e) => console.log(`${e.message}`))
