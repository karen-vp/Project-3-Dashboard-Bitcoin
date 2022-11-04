 import {showGraphic} from './chart.js'
 import {getValue} from './select.js'

 let priceList = []
 const bpiPrice = async()=>{
    const API = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const resp= await fetch(API,{method:'GET'})
    const prices= await resp.json();
    console.log(prices)
    
    const euro = prices.bpi.EUR.rate;
    const dolar = prices.bpi.USD.rate;
    const libra = prices.bpi.GBP.rate;
    priceList = [euro,dolar,libra]
    
    showGraphic(priceList)
}
bpiPrice()

