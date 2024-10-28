import {useEffect,useState} from 'react'

function useCurrency(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//gets the currency from api and stores in res in json
        .then((res)=>setData(res[currency]))//current currency is changed dynamically
    },[currency])
    console.log(data);
    return data
}
export default useCurrency;