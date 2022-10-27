export let priceList = []
export const bpiPrice = async()=>{
    const API = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const resp= await fetch(API,{method:'GET'})
    const prices= await resp.json();
    // console.log(prices)
    
    const euro = prices.bpi.EUR.rate;
    const dolar = prices.bpi.USD.rate;
    const libra = prices.bpi.GBP.rate;
    return priceList = [euro,dolar,libra]

}

export const bpiPriceMxn = async()=>{
    const API = 'https://api.coindesk.com/v1/bpi/currentprice/MXN.json'

    const resp= await fetch(API, {method: 'GET'})
    const price= await resp.json();
    
    const mxn = price.bpi.MXN.rate;
    // console.log(mxn)
    return priceList.push(mxn)
}
