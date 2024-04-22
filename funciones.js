
const seniales = [150, 210, 56, 330, 250, 180, 190, 200, 150, 90, 165, 240, 20, 340];


function normalizarSeniales(seniales) {
    const cuadrantes = [];
    seniales.forEach(senial => {
        let cuadrante = '';
        if ((senial >= 45 && senial < 135) || (senial >= 405 && senial < 495)) {
            cuadrante = 'N';
        } else if ((senial >= 135 && senial < 225) || (senial >= 495 && senial < 585)) {
            cuadrante = 'E';
        } else if ((senial >= 225 && senial < 315) || (senial >= 585 && senial < 675)) {
            cuadrante = 'S';
        } else {
            cuadrante = 'O';
        }
        cuadrantes.push(cuadrante);
    });
    return cuadrantes.join(' ');
}


function contarCiclos(cuadrantes) {
    const secuencia = cuadrantes.join('');
    const ciclosHorarios = (secuencia.match(/NESO|ESON|SONE|ONES/g) || []).length;
    const ciclosAntihorarios = (secuencia.match(/NOSE|OSEN|ENOS|SENO/g) || []).length;
    return ciclosHorarios + ciclosAntihorarios;
}


function calcularPorcentajeCuadrante(cuadrantes, cuadrante) {
    const ocurrencias = cuadrantes.filter(c => c === cuadrante).length;
    return (ocurrencias / cuadrantes.length) * 100;
}


function calcular() {
    document.getElementById('seniales').textContent = "Señales: " + seniales.join(' ');
    
    const cuadrantes = normalizarSeniales(seniales);
    document.getElementById('cuadrantes').textContent = "Cuadrantes: " + cuadrantes;
    
    const ciclos = contarCiclos(cuadrantes.split(' '));
    document.getElementById('ciclos').textContent = "Ciclos completos: " + ciclos;
    
    const porcentajeNorte = calcularPorcentajeCuadrante(cuadrantes.split(' '), 'N');
    const porcentajeEste = calcularPorcentajeCuadrante(cuadrantes.split(' '), 'E');
    const porcentajeSur = calcularPorcentajeCuadrante(cuadrantes.split(' '), 'S');
    const porcentajeOeste = calcularPorcentajeCuadrante(cuadrantes.split(' '), 'O');
    
    document.getElementById('porcentaje').textContent = "Porcentaje de ocurrencia de cuadrantes: \n" +
                                                        "Norte: " + porcentajeNorte.toFixed(2) + "%\n" +
                                                        "Este: " + porcentajeEste.toFixed(2) + "%\n" +
                                                        "Sur: " + porcentajeSur.toFixed(2) + "%\n" +
                                                        "Oeste: " + porcentajeOeste.toFixed(2) + "%";
}
