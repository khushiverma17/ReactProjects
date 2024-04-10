import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    // when this hook is loaded then call the api
    // The Effect Hook lets you perform side effects in function components this hook can be called when a component in bound or unbound or life cylce effect of the component

    const [data, setData]=useState({});
    // useEffect(()=>{
    //    /* Fetch uses promises to handle asynchronous operations, making it easier to work with asynchronous code in a more readable and maintainable way.fetch returns a promise that resolves to a Response object representing the response to the request.You chain a .then() method onto the promise returned by fetch. Inside this method, you provide a callback function that will be called when the promise is resolved, i.e., when the response is received.If the response is successful, you can use methods like .json() to parse the response body into JSON format, or .text() to get the response body as plain text.*/
    //     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/
    //     ${currency}.json`)
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res[currency]))
    //     console.log("data is " + data)
    // }, [currency])
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                console.log('Response:', res);
                return res.json();
            })
            .then((res) => {
                console.log('Parsed JSON:', res);
                setData(res[currency]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [currency]);


    // console.log("data is " +data);

    return data;    
    

}


export default useCurrencyInfo