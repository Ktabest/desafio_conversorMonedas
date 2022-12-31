
const btnConversion = document.querySelector('#conversion')
const urlApi = "https://mindicador.cl/api"
async function conversorDivisas() {
    const clp = document.querySelector('#pesosClp').value
    const monedaAelegir = document.querySelector('#convertirA').value
    const noSeQueSeriaEsto = (`${urlApi}/${monedaAelegir}`)
    const res = await fetch(noSeQueSeriaEsto)
    const data = await res.json()

    const valorCero = data.serie[0]['valor']

    const resultadoCoversion = document.querySelector('#resultadoConversion')
    const resultado = (Number(clp) / valorCero).toFixed(2)

    resultadoCoversion.innerHTML = `Resultado: $ ${resultado}`

    const labels = data.serie.slice(0,10).map((datosGrafico) => {
        return datosGrafico.fecha;
    })

    const datos = data.serie.slice(0,10).map((datosGrafico) => {
        return datosGrafico.valor;
    })
    const datasets = [
        {
            label: "Monedas",
            borderColor: "rgb(255, 99, 132)",
            datos
        }
    ]
    const objectGraphic = {labels, datasets};

    const config = {
        type: "line",
        datos: objectGraphic
    }

    document.querySelector('#grafico')
    grafico.style.backgroundColor = "white";
    new Chart(grafico, config);
}

    btnConversion.addEventListener("click", conversorDivisas)
    conversorDivisas();
    
    