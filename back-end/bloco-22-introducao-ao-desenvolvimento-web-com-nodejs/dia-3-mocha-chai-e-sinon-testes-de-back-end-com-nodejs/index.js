const poloFind = (num) => (
    num === 0 ? 'Neutro' : num > 0 ? "Positivo" : 'Negativo'
    );

module.exports = poloFind;