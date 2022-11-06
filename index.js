 import {showGraphic} from './chart.js'

 let priceList = []
 const bpiPrice = async()=>{
    const API = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const resp= await fetch(API,{method:'GET'})
    const prices= await resp.json();
    // console.log(prices)
    
    const euro = prices.bpi.EUR.rate;
    const dolar = prices.bpi.USD.rate;
    const libra = prices.bpi.GBP.rate;
    priceList = [euro,dolar,libra]
    
    showGraphic(priceList)
}
// funtion getmoney

document.getElementById("cotizar").addEventListener("click",()=>{
const  moneda=
    document.getElementById("moneda").value
    
    const Url="https://api.coindesk.com/v1/bpi/currentprice/"+moneda+".json"
    console.log(moneda)
    const resp= fetch(Url,{method:'GET'})
    .then((res)=>
    {
    res.json().then((r)=> document.getElementById("outputcurrency").innerHTML=r.bpi.USD.rate)
    //console.log(res.status)
    }
   

    );
    //console.log()
    //console.log(prices.json())
});


bpiPrice()


