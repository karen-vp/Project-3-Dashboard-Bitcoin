export const showGraphic = (priceList)=>{
    console.log(priceList)
    const grafico = document.getElementById('myChart').getContext('2d');
   
    let dataValue = []
    priceList.forEach((data) => {
        dataValue.push(parseInt(data));
    
      });
    new Chart(grafico, {

        type: 'line',
        data : {
               labels: ['Euro', 'Dolar', 'Libra Esterlina'],
               datasets: [{
               label: 'Precio actual de Bitcoin',
               data: dataValue,
               fill: false,
               borderColor: 'rgb(75, 192, 192)',
               tension: 0.1
               },
           ],
       },
   })
}