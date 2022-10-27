const grafico = document.getElementById('myChart');
import {priceList, bpiPrice, bpiPriceMxn} from "./index.js";

const myGrafica = async()=>{
await bpiPrice()
await bpiPriceMxn()
const myChart = new Chart(grafico, {
     type: 'line',
     data : {
            labels: ['Euro', 'Dolar', 'Libra Esterlina', 'Peso Mexicano'],
            datasets: [{
            label: 'Precio actual de Bitcoin',
            data: priceList,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
            },
        ],
    },
    
})
console.log(priceList)
}
myGrafica()