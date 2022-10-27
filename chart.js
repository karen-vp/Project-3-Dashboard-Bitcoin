const grafico = document.getElementById('myChart');
import {priceList, currentprice} from "./index.js";

const myGrafica = async()=>{
await currentprice()
const myChart = new Chart(grafico, {
     type: 'line',
     data : {
            labels: ['Euro', 'Dolar', 'Libra Esterlina'],
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